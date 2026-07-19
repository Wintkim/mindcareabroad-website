# Mindcare Abroad 예약 설정

예약·신청 링크는 `lib/booking.ts`의 `bookingLinks` 한 곳에서 관리합니다. 다음 네 값을 실제 Cal.com, Google Calendar 또는 전용 폼 URL로 교체하세요.

- `FREE_CONSULTATION_BOOKING_URL`: 무료 15분 전용 캘린더
- `INDIVIDUAL_SESSION_BOOKING_URL`: 개인상담 50분 전용 캘린더
- `INDIVIDUAL_PROGRAM_FORM_URL`: 4주 개인 프로그램 전용 짧은 폼
- `COUPLE_INQUIRY_FORM_URL`: 커플상담 공용 문의폼

무료 15분과 개인상담 50분은 실제 Cal.eu 예약 URL이 연결되어 있습니다. 4주 개인 프로그램과 커플상담은 현재 Google Form 신청·문의 링크로 연결됩니다. 기존 과거 응답용 Google Form은 `legacyApplicationForm`과 `legacyBookingForm`에 별도로 보존되어 있으며 신규 무료·개인상담 버튼에는 사용하지 않습니다.

개인상담 캘린더에는 이름/닉네임, 이메일, WhatsApp 또는 카카오톡, 거주 국가, 상담 방식, 한 문장의 도움 요청, 정책·개인정보 동의를 설정하세요. 4주 개인 프로그램 폼에는 연락 정보, 국가·시간대, 다루고 싶은 문제, 4주 후 목표, 정책·개인정보 동의를 받고 가능한 요일·시간은 묻지 않습니다. 커플 폼에는 신청자·파트너 호칭, 참여 동의, 희망 언어, 국가·시간대, 상담 이유, 연락처와 동의를 설정하세요.

Google Form에서는 기존 질문을 삭제하거나 순서를 바꾸지 말고 상담 상품, 진행 방식, 거주 국가와 시간대, 한두 문장의 도움 요청을 새 필수 질문으로 추가하세요. 기존 제출은 무료 15분 상담 신청으로 간주합니다.

계좌정보는 공개 코드에 넣지 않습니다. 신청 뒤 비공개 안내 화면·이메일·메시지로 전달하세요. Stripe 도입 시 `lib/booking.ts`와 `/booking`의 결제 단계만 결제 세션 URL/API로 교체하면 됩니다. 원본 파일 백업은 `.backup/before-booking-redesign-2026-07-18/`에 있습니다.

## Development

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
