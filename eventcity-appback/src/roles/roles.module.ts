import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './modelos/roles';

@Module({
  imports: [SequelizeModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
