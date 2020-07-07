import { IsDefined, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class TaskDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string;
}


export class TaskParamDto  {
    @IsUUID()
    @IsDefined()
    id: string;
}