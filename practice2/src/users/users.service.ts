import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Users>) {
    console.log("data:", data)
    if (!data.email || !data.password) {
      throw new Error('Email and password are required');
    }
    const existingUser = this.repo.findOneBy({ email: data.email });
    if (!existingUser) {
      throw new Error(`User with email ${data.email} already exists`);
    }
    if (data.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    if (!data.name) {
      throw new Error('Name is required');
    }
    if (data.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
    if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      throw new Error('Name must contain only letters and spaces');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error('Invalid email format');
    }
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Users>) {
    const existingUser = this.repo.findOneBy({ id });
    if (!existingUser) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.repo.update(id, data);
  }

  delete(id: number) {
    const existingUser = this.repo.findOneBy({ id });
    if (!existingUser) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.repo.delete(id);
  }
}
