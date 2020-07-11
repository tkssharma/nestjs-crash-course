import { IsEmail, IsDefined, IsUUID, IsNotEmpty, IsObject, IsMongoId } from "class-validator";

export class CreateCustomerDTO {
    readonly first_name: string;
    readonly last_name: string;

    @IsEmail()
    @IsDefined()
    readonly email: string;
    
    readonly phone: string;
    readonly address: string;
    readonly description: string;
    readonly created_at: Date;
}

export class CustomerParamDTO {

    @IsMongoId()
    @IsNotEmpty()
    readonly customerId: string;
}