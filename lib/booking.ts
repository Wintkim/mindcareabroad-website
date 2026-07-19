export const bookingLinks = {
  // Replace each temporary URL independently when Cal.com/Google Calendar/forms are ready.
  FREE_CONSULTATION_BOOKING_URL:
    "https://app.cal.eu/mindcareabroad/free-15",
  INDIVIDUAL_SESSION_BOOKING_URL:
    "https://app.cal.eu/mindcareabroad/individual-50",
  INDIVIDUAL_PROGRAM_FORM_URL:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoC7o9KmLR_fvsmPypoBdwESY9zne2vQyG8p1F2wjfkRMWew/viewform?usp=pp_url&entry.1292350281=4%EC%A3%BC%20%EA%B0%9C%EC%9D%B8%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%20%E2%80%94%2050%EB%B6%84%20%C3%97%204%ED%9A%8C%20%2F%20180%E2%82%AC",
  // Replace with an intensive-program prefilled URL when one is available.
  INTENSIVE_INDIVIDUAL_PROGRAM_FORM_URL:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoC7o9KmLR_fvsmPypoBdwESY9zne2vQyG8p1F2wjfkRMWew/viewform?usp=pp_url&entry.1292350281=4%EC%A3%BC%20%EA%B0%9C%EC%9D%B8%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%20%E2%80%94%2050%EB%B6%84%20%C3%97%204%ED%9A%8C%20%2F%20180%E2%82%AC",
  COUPLE_INQUIRY_FORM_URL:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoC7o9KmLR_fvsmPypoBdwESY9zne2vQyG8p1F2wjfkRMWew/viewform",
  // Archive only: never use this legacy form for new product buttons.
  legacyApplicationForm: "https://forms.gle/9bVLEtrsjJjk52U36",
  kakao: "https://open.kakao.com/o/sqXbS7xi",
} as const;

export const services = [
  {
    id: "individual-session",
    title: "개인상담 1회",
    titleEn: "Individual session",
    duration: "50분",
    durationEn: "50 min",
    price: "50€",
    forWhom: "관계, 외로움, 자존감, 해외생활과 감정 문제를 깊이 정리하고 싶은 분",
    includes: ["현재 문제와 감정 정리", "일상에서 실천할 구체적인 방향 제안"],
    action: "50분 개인상담 예약",
    actionEn: "Book a 50-min session",
    href: bookingLinks.INDIVIDUAL_SESSION_BOOKING_URL,
    kind: "booking",
    featured: false,
    compareAt: undefined,
  },
  {
    id: "individual-program",
    title: "4주 개인 프로그램",
    titleEn: "4-week individual program",
    duration: "50분 × 4회",
    durationEn: "50 min × 4",
    price: "180€",
    compareAt: "정상가 200€ · 20€ 할인",
    forWhom: "반복되는 고민과 관계·행동 패턴을 차분히 바꾸고 싶은 분",
    includes: ["감정 상태와 반복 패턴 점검", "자존감·감정 조절 및 대응 방법 설계", "첫 회기부터 6주 이내 사용"],
    action: "4주 프로그램 신청",
    actionEn: "Apply for the 4-week program",
    href: bookingLinks.INDIVIDUAL_PROGRAM_FORM_URL,
    kind: "application",
    featured: true,
  },
  {
    id: "intensive-individual-program",
    title: "4주 집중 개인 프로그램",
    titleEn: "4-week intensive individual program",
    duration: "50분 × 8회",
    durationEn: "50 min × 8",
    price: "360€",
    compareAt: "1회 상담 50€ × 8회 = 400€ · 집중 프로그램 360€ · 40€ 절약",
    forWhom: "관계 위기나 중요한 결정을 앞두고, 주 1회보다 촘촘하게 감정과 행동을 점검하고 싶은 분",
    includes: [
      "현재 감정과 관계 상황 정리",
      "반복되는 관계·행동 패턴 점검",
      "매회 구체적인 대응 방법과 실천 목표 설계",
      "주 2회 상담 시간 우선 조율",
      "첫 회기일부터 6주 이내 사용",
    ],
    action: "집중 프로그램 신청",
    actionEn: "Apply for the intensive program",
    href: bookingLinks.INTENSIVE_INDIVIDUAL_PROGRAM_FORM_URL,
    kind: "application",
    featured: false,
  },
  {
    id: "couple-session",
    title: "커플상담 1회",
    titleEn: "Couples session",
    duration: "70분",
    durationEn: "70 min",
    price: "100€",
    forWhom: "두 사람이 함께 갈등의 원인과 대화 패턴을 정리하고 싶은 경우",
    includes: ["참여 의사·언어·시간대 사전 확인", "감정과 의도를 안전하게 전달하도록 지원"],
    action: "커플상담 일정 문의",
    actionEn: "Ask about couples scheduling",
    href: bookingLinks.COUPLE_INQUIRY_FORM_URL,
    kind: "application",
    featured: false,
    compareAt: undefined,
  },
  {
    id: "couple-program",
    title: "4주 커플 프로그램",
    titleEn: "4-week couples program",
    duration: "70분 × 4회",
    durationEn: "70 min × 4",
    price: "360€",
    compareAt: "정상가 400€ · 40€ 할인",
    forWhom: "대화 방식과 관계 패턴을 지속적으로 조율하고 싶은 커플",
    includes: ["갈등 및 대화 패턴 정리", "4회 맞춤 실천 방향", "첫 회기부터 6주 이내 사용"],
    action: "4주 커플 프로그램 문의",
    actionEn: "Ask about the couples program",
    href: bookingLinks.COUPLE_INQUIRY_FORM_URL,
    kind: "application",
    featured: false,
  },
] as const;

export const policies = {
  free: "일정 변경이나 취소가 필요하면 가능한 한 상담 6시간 전까지 연락해 주세요.",
  paid: [
    "상담 24시간 전까지 1회 무료 일정 변경이 가능합니다.",
    "상담 시작 24시간 이내 취소 또는 노쇼는 환불되지 않습니다.",
    "지각하더라도 상담은 예정된 종료시간에 종료됩니다.",
    "상담자 사정으로 취소될 경우 일정을 변경하거나 전액 환불합니다.",
    "패키지는 첫 회기일부터 6주 이내 사용해야 합니다.",
    "패키지 환불 시 진행 회기는 1회 정상가로 계산한 뒤 남은 금액을 환불합니다.",
  ],
};
