import { Test, TestingModule } from '@nestjs/testing';
import { AtristService } from './atrist.service';

describe('AtristService', () => {
  let service: AtristService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtristService],
    }).compile();

    service = module.get<AtristService>(AtristService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
