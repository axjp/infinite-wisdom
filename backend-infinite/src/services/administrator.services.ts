import { Inject, Injectable } from "@nestjs/common";
import { AdministratorEntity } from "src/entities/administrator.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdministratorServicesServices{
constructor(@Inject('USER_REPOSITORY') private readonly administratorRepository: Repository<AdministratorEntity>){
}

findAll(){
    const users = this.administratorRepository.find();
    
}


}