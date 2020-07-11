import { IsDefined, IsNotEmpty, IsString, IsUUID, isDefined, IsBoolean } from "class-validator";
import { Type, Transform } from "class-transformer";

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

export class QueryParamDto {
    @IsDefined()
    @IsBoolean()
    // @Type(()=>Boolean)
    @Transform(value => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
    })
    filter: boolean;

    @IsDefined()
    @IsString()
    name: string;
}
