import { Test, TestingModule } from '@nestjs/testing';
import { ProviderController } from './providers.controller';

describe('ProviderController', () => {
  let controller: ProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderController],
    }).compile();

    controller = module.get<ProviderController>(ProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
