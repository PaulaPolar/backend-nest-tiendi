import { Test, TestingModule } from '@nestjs/testing';
import { InterfacesController } from './interfaces.controller';

describe('InterfacesController', () => {
  let controller: InterfacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterfacesController],
    }).compile();

    controller = module.get<InterfacesController>(InterfacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
