import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { ProfileController } from './profile.controller.js';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UsersController, ProfileController],
  providers: [UsersService],
})
export class UsersModule {}