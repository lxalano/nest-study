import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    UsersModule,
    AuthModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
