'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page(props: PageProps) {
  const router = useRouter();
  const resolvedParams = use(props.params);
  const { id } = resolvedParams;

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
