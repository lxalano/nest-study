import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        UsersService,],
    // exports: [UsersService], 这个好像是暴露方法？
})
export class UsersModule { }
