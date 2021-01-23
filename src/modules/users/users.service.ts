import { Injectable } from '@nestjs/common';
import { use } from 'passport';

export type User = any;
@Injectable()
export class UsersService {
    private readonly users: User[];
    constructor() {
        this.users = [
            {
                userID: 1,
                username: 'zhangsan',
                password: '123001',
            },
            {
                userID: 2,
                username: 'lisi',
                password: '123002',
            },
            {
                userID: 3,
                username: 'wangwu',
                password: '123003',
            },
        ];
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }

}
