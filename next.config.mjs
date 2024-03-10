import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './i18n/i18n.ts'
);

/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
          languages: [
            { title: "English", name: "en" },
            { title: "Français", name: "fr" },
          ],
          defaultLanguage: "en",
        }),
      },
};

export default withNextIntl(nextConfig);
