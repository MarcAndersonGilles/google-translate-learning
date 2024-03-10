'use client';

import { useRouter, usePathname } from '@/navigation';
import { ChangeEvent } from 'react';

export default function LanguageChanger({ locale }: { locale: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(pathname, { locale: e.target.value });
    };

    return (
        <select value={locale} onChange={handleChange}>
            <option value="en">English</option>
            <option value="fr">French</option>

        </select>
    );
}