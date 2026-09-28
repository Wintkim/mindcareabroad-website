import { contactLinks } from "./content";

// Clients book the first session on Cal first; bank-transfer details are sent personally afterward.
// Packages are paid in full upfront; remaining sessions are scheduled after the first one.
const individualProgramBookingUrl =
  "https://www.cal.eu/mindcareabroad/4%E1%84%8C%E1%85%AE-private-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7-50%E1%84%87%E1%85%AE%E1%86%AB";
const intensiveProgramBookingUrl =
  "https://www.cal.eu/mindcareabroad/8%E1%84%8C%E1%85%AE-%E1%84%80%E1%85%A2%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B7-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7-50%E1%84%87%E1%85%AE%E1%86%AB";
const coupleBookingUrl =
  "https://www.cal.eu/mindcareabroad/%E1%84%8F%E1%85%A5%E1%84%91%E1%85%B3%E1%86%AF%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B7-70%E1%84%87%E1%85%AE%E1%86%AB";

export const bookingLinks = {
  selection: "/booking",
  // 1. Individual single session (dedicated event)
  INDIVIDUAL_SESSION_BOOKING_URL:
    "https://app.cal.eu/mindcareabroad/individual-50",
  // 2. Individual 4-week program (dedicated event)
  INDIVIDUAL_PROGRAM_BOOKING_URL: individualProgramBookingUrl,
  // 3. Individual intensive program (dedicated event)
  INTENSIVE_INDIVIDUAL_PROGRAM_BOOKING_URL: intensiveProgramBookingUrl,
  // 4. Couple single session (dedicated event)
  COUPLE_SESSION_BOOKING_URL: coupleBookingUrl,
  // 5. Couple 4-week package (dedicated event)
  COUPLE_PROGRAM_BOOKING_URL: "https://app.cal.eu/mindcareabroad/couple-package-70",
  // Archive only: never use this legacy form for new product buttons.
  legacyApplicationForm: "https://forms.gle/9bVLEtrsjJjk52U36",
  kakao: contactLinks.kakao,
} as const;

export const services = [
  {
    id: "individual-session",
    title: "1:1 온라인 상담",
    titleEn: "1:1 online session",
    duration: "50분",
    durationEn: "50 min",
    price: "50€",
    category: "individual",
    badge: null,
    badgeEn: null,
    forWhom: "지금 가장 필요한 문제부터 한 번 차분히 이야기해보고 싶은 분께",
    forWhomEn: "For a calm conversation about what matters most right now",
    includes: ["현재 문제와 감정 정리", "일상에서 실천할 구체적인 방향 제안"],
    includesEn: ["Explore your current concerns and feelings", "Find practical directions for everyday life"],
    action: "1회 상담 예약하기",
    actionEn: "Book a single session",
    href: bookingLinks.INDIVIDUAL_SESSION_BOOKING_URL,
    kind: "session",
    upgradeNote: "1회 상담 후 7일 이내 4주 프로그램으로 전환 시, 결제한 50€는 프로그램 금액에서 차감됩니다.",
    upgradeNoteEn: "If you switch to the 4-week program within 7 days of your single session, the €50 you paid is deducted from the program price.",
    featured: false,
    perSession: undefined,
    perSessionEn: undefined,
  },
  {
    id: "individual-program",
    title: "4주 개인 프로그램",
    titleEn: "4-week individual program",
    duration: "50분 × 4회",
    durationEn: "50 min × 4",
    price: "180€",
    category: "individual",
    badge: "추천",
    badgeEn: "Recommended",
    perSession: "회당 45€",
    perSessionEn: "€45/session",
    forWhom: "한 번의 대화보다, 4주 동안 꾸준히 정리하고 싶은 분께",
    forWhomEn: "For those who want more than one conversation — four weeks of steady work",
    includes: [
      "4주 동안 같은 고민을 연속적으로 점검",
      "반복되는 감정과 관계 패턴을 함께 정리",
      "매주 변화와 다음 행동을 이어서 점검",
    ],
    includesEn: [
      "Continue working on the same concern across four weeks",
      "Explore recurring emotional and relationship patterns together",
      "Review changes and next steps each week",
    ],
    action: "4주 프로그램 시작하기",
    actionEn: "Start the 4-week program",
    href: bookingLinks.INDIVIDUAL_PROGRAM_BOOKING_URL,
    kind: "program",
    steps: ["1주 — 현재 상황과 마음 정리", "2주 — 반복되는 감정·관계 패턴 살펴보기", "3주 — 새로운 대응과 선택 연습", "4주 — 변화 점검과 앞으로의 방향 정리"],
    stepsEn: ["Week 1 — Take stock of your situation and feelings", "Week 2 — Look at recurring emotional and relationship patterns", "Week 3 — Practice new responses and choices", "Week 4 — Review changes and set your direction"],
    featured: true,
  },
  {
    id: "intensive-individual-program",
    title: "4주 집중 개인 프로그램",
    titleEn: "4-week intensive individual program",
    duration: "50분 × 8회",
    durationEn: "50 min × 8",
    price: "360€",
    category: "individual",
    badge: "집중 지원",
    badgeEn: "Focused support",
    perSession: "회당 45€",
    perSessionEn: "€45/session",
    forWhom: "짧은 기간 동안 주 2회로 집중적인 점검이 필요한 분께",
    forWhomEn: "For focused support twice a week over a short period",
    includes: [
      "현재 감정과 관계 상황 정리",
      "반복되는 관계·행동 패턴 점검",
      "매회 구체적인 대응 방법과 실천 목표 설계",
      "주 2회 상담 시간 우선 조율",
      "첫 회기일부터 6주 이내 사용",
    ],
    includesEn: [
      "Explore your current emotions and relationship situation",
      "Review recurring relationship and behavior patterns",
      "Set practical responses and goals each session",
      "Priority scheduling for twice-weekly sessions",
      "Use within 6 weeks of the first session",
    ],
    action: "집중 프로그램 예약하기",
    actionEn: "Book the intensive program",
    href: bookingLinks.INTENSIVE_INDIVIDUAL_PROGRAM_BOOKING_URL,
    kind: "program",
    steps: ["1주 — 지금의 상황과 감정 정리 (주 2회)", "2주 — 반복되는 관계·행동 패턴 점검 (주 2회)", "3주 — 매회 대응 방법과 실천 목표 연습 (주 2회)", "4주 — 변화 점검과 이후 계획 (주 2회)"],
    stepsEn: ["Week 1 — Explore your situation and feelings (2×)", "Week 2 — Review recurring patterns (2×)", "Week 3 — Practice responses and goals (2×)", "Week 4 — Review changes and plan ahead (2×)"],
    featured: false,
  },
  {
    id: "couple-session",
    title: "1회 커플 상담",
    titleEn: "Single couple session",
    duration: "70분",
    durationEn: "70 min",
    price: "100€",
    category: "couple",
    badge: null,
    badgeEn: null,
    forWhom: "두 사람의 감정과 갈등을 한 번 차분히 정리해보고 싶은 커플에게",
    forWhomEn: "For couples who want a calm conversation about their feelings and conflicts",
    includes: ["참여 의사·언어·시간대 사전 확인", "감정과 의도를 안전하게 전달하도록 지원"],
    includesEn: ["Confirm participation, language, and time zones beforehand", "Support for sharing feelings and intentions safely"],
    action: "1회 커플 상담 예약하기",
    actionEn: "Book a single couple session",
    href: bookingLinks.COUPLE_SESSION_BOOKING_URL,
    kind: "session",
    upgradeNote: "1회 커플 상담 후 7일 이내 커플 프로그램으로 전환 시, 결제한 100€는 프로그램 금액에서 차감됩니다.",
    upgradeNoteEn: "If you switch to the couple program within 7 days of your single session, the €100 you paid is deducted from the program price.",
    featured: false,
    perSession: undefined,
    perSessionEn: undefined,
  },
  {
    id: "couple-program",
    title: "한 달 커플 패키지",
    titleEn: "Monthly couple package",
    duration: "70분 × 4회",
    durationEn: "70 min × 4",
    price: "360€",
    category: "couple",
    badge: "커플 추천",
    badgeEn: "Recommended for couples",
    perSession: "회당 90€",
    perSessionEn: "€90/session",
    forWhom: "반복되는 갈등을 한 번의 대화로 끝내지 않고, 4주 동안 함께 정리합니다.",
    forWhomEn: "Instead of ending recurring conflict with a single conversation, we work through it together over four weeks.",
    includes: [
      "반복되는 갈등 패턴 점검",
      "서로의 감정과 의사소통 방식 정리",
      "매주 변화와 갈등 상황을 이어서 점검",
    ],
    includesEn: [
      "Review recurring conflict patterns",
      "Understand each other's feelings and communication styles",
      "Review changes and conflict situations each week",
    ],
    action: "커플 프로그램 시작하기",
    actionEn: "Start the couple program",
    href: bookingLinks.COUPLE_PROGRAM_BOOKING_URL,
    kind: "program",
    steps: ["1주 — 두 사람의 이야기와 바라는 변화 확인", "2주 — 갈등이 반복되는 대화 패턴 찾기", "3주 — 새로운 대화 방식 함께 연습", "4주 — 변화 점검과 앞으로의 약속"],
    stepsEn: ["Week 1 — Hear both sides and set shared goals", "Week 2 — Find the conversation patterns behind conflict", "Week 3 — Practice new ways of talking together", "Week 4 — Review changes and agree on next steps"],
    featured: true,
  },
] as const;

export const policies = {
  paid: [
    "상담 24시간 전까지 1회 무료 일정 변경이 가능합니다.",
    "상담 시작 24시간 이내 취소 또는 노쇼는 환불되지 않습니다.",
    "지각하더라도 상담은 예정된 종료시간에 종료됩니다.",
    "상담자 사정으로 취소될 경우 일정을 변경하거나 전액 환불합니다.",
    "패키지는 첫 회기일부터 6주 이내 사용해야 합니다.",
    "1회 상담 후 7일 안에 같은 유형의 패키지로 전환하면 1회 상담 비용을 패키지 금액에서 차감합니다.",
  ],
  paidEn: [
    "You may reschedule once at no extra charge up to 24 hours before the session.",
    "Cancellations within 24 hours of the session and no-shows are non-refundable.",
    "Sessions end at the scheduled time even if you arrive late.",
    "If the counselor cancels, you may reschedule or receive a full refund.",
    "Packages must be used within 6 weeks of the first session.",
    "If you switch to a package of the same type within 7 days of a single session, the single-session fee is deducted from the package price.",
  ],
};
