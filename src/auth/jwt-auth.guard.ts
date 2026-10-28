
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard {
    constructor(private readonly JwtService: JwtService) {}
    
async canActivate(context: ExecutionContext): Promise<boolean> {
  const request = context.switchToHttp().getRequest();
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    throw new UnauthorizedException('Token yuborilmadi');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = await this.JwtService.verifyAsync(token);
    request.user = payload;
    return true;
  } catch {
    throw new UnauthorizedException('Token noto‘g‘ri yoki muddati tugagan');
  }
}

}