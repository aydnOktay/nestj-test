import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { Delete, Put } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async CreateUser(@Body() bodyy: UserCreateDto): Promise<UserModel> {
        return await this.userService.create(bodyy);
    }

    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return await this.userService.findAll();
    }

    @Get(":id")
    async getUser(@Param() params): Promise<UserModel[]> {
        return await this.userService.findOne(params.id);
    }

    @Put(":id")
    async updateUser(@Param("id") id: string, @Body() userUpdate: UserUpdateDto): Promise<UserModel> {
        return await this.userService.update(id, userUpdate)
    }

    @Delete(":id")
    async deleteUser(@Param("id") id:string):Promise<UserModel>{
        return await this.userService.delete(id);
    }

}