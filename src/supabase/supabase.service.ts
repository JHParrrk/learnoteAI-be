//supabase.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'Supabase URL and Service Role Key must be provided in .env',
      );
    }

    this.supabase = createClient<any, 'public', 'public'>(
      supabaseUrl,
      supabaseKey,
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
