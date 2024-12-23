import { Module } from '@nestjs/common';
import { DepartamentosModule } from './modules/departamentos/departamentos.module';
import { MunicipiosModule } from './modules/municipios/municipios.module';
import { TiposIdentificacionModule } from './modules/tipos-identificacion/tipos-identificacion.module';
import { ProductosModule } from './modules/productos/productos.module';
import { TransaccionesModule } from './modules/transacciones/transacciones.module';
import { EntregasModule } from './modules/entregas/entregas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Module({
  imports: [
    DepartamentosModule, 
    MunicipiosModule, 
    TiposIdentificacionModule, 
    ProductosModule, 
    TransaccionesModule, 
    EntregasModule, 
    UsuariosModule,
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles globalmente
    }),

    // Configuración de TypeORM usando el ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<string>('DB_TYPE') as any,
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities:  [__dirname + '/modules/**/domain/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
      }),
    }),
  ],
})
export class AppModule { }
