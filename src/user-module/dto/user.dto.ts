import { IsString, IsEmail, IsNotEmpty, IsDefined } from "class-validator";

export class UserDto {
    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    username: string;
}

export class UserParamsDto {
    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;
}