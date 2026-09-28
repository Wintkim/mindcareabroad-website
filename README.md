# Mindcare Abroad 예약 설정

예약·문의 링크와 상품 정보는 `lib/booking.ts`에서, 기본 CTA와 홈페이지 문구는 `lib/content.ts`에서 관리합니다. 한국어를 기준으로 영어 문구도 함께 수정하세요.

- `selection`: `/booking` — 헤더·히어로·마지막 예약 버튼의 공통 목적지
- `INDIVIDUAL_SESSION_BOOKING_URL`: 50분 / 50€ 1:1 온라인 상담 전용 Cal.eu 캘린더
- `INDIVIDUAL_PROGRAM_BOOKING_URL`: 4주 개인 프로그램 캘린더 (신청·결제 확인 후)
- `INTENSIVE_INDIVIDUAL_PROGRAM_BOOKING_URL`: 위와 동일한 캘린더 (집중 프로그램 참여자도 사용 가능)
- `COUPLE_SESSION_BOOKING_URL`: 1회 커플 상담 캘린더 (신청·결제 확인 후)
- `COUPLE_PROGRAM_BOOKING_URL`: 위와 동일한 캘린더 (한 달 커플 패키지 참여자도 사용 가능)
- `kakao`: 상담 전 간단 문의 (`lib/content.ts`의 `contactLinks.kakao`와 동일)

`/booking`에서 개인 상담 3종과 커플/부부 상담 2종을 구분해 보여줍니다. 추천 상품은 180€ 개인 프로그램과 360€ 커플 패키지입니다. 이전 `/booking/free` 주소는 `/booking`으로 영구 이동합니다. 과거 응답용 Google Form은 `legacyApplicationForm`과 `legacyBookingForm`에 보존하며 신규 예약 버튼에는 사용하지 않습니다.

개인 프로그램과 커플 상품의 Cal.eu 페이지는 신청·결제 확인을 마친 참여자의 일정 예약용입니다. 신규 신청자는 카드의 카카오톡 문의 링크로 안내합니다. 각 상품의 버튼 문구와 예약 링크는 `services`에서 관리하며 홈페이지 요금표와 예약 페이지가 함께 사용합니다. 외부 Cal.eu 설정과 문구는 코드 수정으로 변경되지 않습니다.

가격: 개인 50€ / 50분, 개인 프로그램 180€ / 50분 × 4회 (회당 45€), 집중 개인 프로그램 360€ / 50분 × 8회 (회당 45€), 커플 100€ / 70분, 커플 패키지 360€ / 70분 × 4회 (회당 90€). 정상가 대비 절약 금액은 각각 개인 프로그램 20€, 집중 개인 프로그램 40€, 커플 패키지 40€입니다.

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
