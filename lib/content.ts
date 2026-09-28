export type Lang = "ko" | "en";

export const ctaLabels = {
  book: { ko: "상담 예약하기", en: "Book a session" },
  inquire: { ko: "상담 전 간단 문의", en: "Ask before booking" },
};

export const contactLinks = {
  kakao: "https://open.kakao.com/o/sqXbS7xi",
  legacyBookingForm: "https://forms.gle/9bVLEtrsjJjk52U36",
  email: "mindcare.abroad@gmail.com",
  instagram: "https://instagram.com/mindcare.abroad",
};

export const content = {
  nav: {
    logo: "Mindcare Abroad",
    lang: { ko: "EN", en: "KO" },
    cta: ctaLabels.book,
  },
  hero: {
    eyebrow: {
      ko: "해외 거주 한국인을 위한 정서·관계 상담",
      en: "Emotional and relationship support for Koreans abroad",
    },
    headline: {
      ko: "낯선 나라에서\n혼자 버티는 마음에게",
      en: "For the heart holding on alone abroad",
    },
    sub: {
      ko: "해외 생활의 외로움, 관계 갈등, 이민 스트레스, 정체성 혼란을\n한국어로 편안하게 이야기하고 함께 정리합니다.",
      en: "Talk comfortably in Korean about loneliness, relationship conflict, migration stress, and identity confusion as we work through them together.",
    },
    cta: ctaLabels.book,
    ctaSecondary: ctaLabels.inquire,
    meta: [
      { icon: "globe", ko: "전 세계 온라인", en: "Online, worldwide" },
      { icon: "chat", ko: "한국어 상담", en: "Counseling in Korean" },
      { icon: "people", ko: "영어·독일어 파트너 소통 지원", en: "English & German partner support" },
    ],
  },
  forYou: {
    eyebrow: { ko: "이런 분께 맞습니다", en: "Who this is for" },
    heading: {
      ko: "혹시 이런 마음이 드셨나요?",
      en: "Does any of this feel familiar?",
    },
    intro: {
      ko: "해외에서 혼자 버티고 있는 마음, 여기서는 편하게 꺼내도 됩니다. 거창하게 설명하지 못해도 괜찮아요.",
      en: "If any of this feels familiar, you are not alone. You do not need perfect words to begin.",
    },
    cards: [
      {
        icon: "🌍",
        title: { ko: "외국에서 혼자 무너질 때", en: "When you are breaking down abroad" },
        desc: {
          ko: "외로움, 무기력, 우울감, 불안, 정체성 혼란이 이유 없이 무겁게 느껴질 때",
          en: "When loneliness, fatigue, low mood, and identity confusion make everything feel heavy",
        },
      },
      {
        icon: "⏰",
        title: { ko: "시차 때문에 누구에게도 말하기 어려울 때", en: "When time zones make support hard" },
        desc: {
          ko: "가장 힘든 순간에 한국의 가족이나 친구에게 바로 연락하기 어려울 때",
          en: "When you need someone most but cannot easily reach people back home",
        },
      },
      {
        icon: "💔",
        title: { ko: "관계와 연애가 반복해서 아플 때", en: "When relationships keep hurting" },
        desc: {
          ko: "회피형 파트너, 나르시시스트 관계, 반복되는 연애 패턴 때문에 마음이 지칠 때",
          en: "When avoidant partners, narcissistic dynamics, or repeated dating patterns leave you exhausted",
        },
      },
      {
        icon: "🤍",
        title: { ko: "혼자 버티는 게 한계일 때", en: "When holding on alone becomes too much" },
        desc: {
          ko: "대단한 해결책보다 내 이야기를 안전하게 들어줄 사람이 필요할 때",
          en: "When you need a safe listener more than a perfect solution",
        },
      },
      {
        icon: "🧭",
        title: { ko: "어디에도 속하지 못하는 것 같을 때", en: "When you feel like you belong nowhere" },
        desc: {
          ko: "한국도, 지금 사는 나라도 완전히 내 자리처럼 느껴지지 않을 때",
          en: "When neither Korea nor your current country feels fully like home",
        },
      },
      {
        icon: "♡",
        title: { ko: "국제커플·부부 소통이 어려울 때", en: "When cross-cultural communication is hard" },
        desc: {
          ko: "문화와 언어가 달라 서로 사랑하면서도 자꾸 상처를 주고받을 때",
          en: "When cultural and language differences make both of you feel unseen",
        },
      },
    ],
  },
  services: {
    eyebrow: { ko: "마음 케어", en: "Care" },
    heading: {
      ko: "당신의 마음을 한국어로 안전하게 풀어갑니다",
      en: "Support that meets you where you are",
    },
    items: [
      {
        title: { ko: "정서 회복 상담", en: "Emotional Recovery" },
        hook: {
          ko: "이유를 모르겠는데 계속 힘든 날들이 이어지고 있나요?",
          en: "Have your days felt heavy for no clear reason?",
        },
        desc: {
          ko: "해외 생활의 외로움, 우울감, 무기력, 불안, 정체성 혼란을 함께 정리하며 다시 숨 쉴 틈을 만들어갑니다.",
          en: "We work through loneliness, low mood, fatigue, anxiety, and identity confusion together.",
        },
      },
      {
        title: { ko: "관계·연애 상담", en: "Relationship & Dating" },
        hook: {
          ko: "왜 비슷한 관계에서 자꾸 같은 방식으로 아플까요?",
          en: "Why do the same relationship patterns keep hurting?",
        },
        desc: {
          ko: "나르시시스트 관계 상처, 회피형 파트너, 반복되는 연애 패턴을 감정의 구조 안에서 함께 읽어드립니다.",
          en: "We look at narcissistic relationship wounds, avoidant partners, and repeated dating patterns.",
        },
      },
      {
        title: { ko: "국제커플·부부 감정 번역", en: "Emotional Translation for Couples" },
        hook: {
          ko: "분명 사랑하는데 왜 서로에게 계속 상처가 될까요?",
          en: "You love each other, so why does it keep hurting?",
        },
        desc: {
          ko: "문화와 언어가 다른 두 사람의 마음을 번역합니다. 영어·독일어 파트너와의 소통 지원도 가능합니다.",
          en: "We translate the emotional languages of two people from different cultures. English and German partner communication is available.",
        },
      },
      {
        title: { ko: "자존감 회복", en: "Rebuilding Self-Worth" },
        hook: {
          ko: "오래 혼자 버티다 보니 나 자신을 잃어버린 것 같나요?",
          en: "After holding everything alone, have you lost touch with yourself?",
        },
        desc: {
          ko: "무너진 자존감과 자기 신뢰를 다시 세우고, 내 감정을 믿는 연습을 함께합니다.",
          en: "We rebuild confidence, self-trust, and the ability to believe your own emotions again.",
        },
      },
    ],
    trust: {
      label: { ko: "처음 오시는 분을 위해", en: "For your first step" },
      points: [
        {
          ko: "상담 전 간단한 문의는 언제든 가능합니다.",
          en: "You are welcome to ask a simple question before booking.",
        },
        {
          ko: "정식 상담은 예약 후 일정과 진행 방법을 안내드립니다.",
          en: "After booking, we will send you the schedule and details of how your session will work.",
        },
        {
          ko: "현재 상황이 정리되지 않아도 괜찮습니다. 이야기하면서 함께 정리합니다.",
          en: "You do not need to have everything figured out. We will work through it together as we talk.",
        },
        {
          ko: "임상 심리치료나 정신과 치료가 아닌 마음케어·상담 지원 서비스입니다.",
          en: "This is counseling support, not clinical psychotherapy or psychiatric treatment.",
        },
      ],
    },
    formats: {
      label: { ko: "진행 방식", en: "Session formats" },
      list: [
        { icon: "🎥", ko: "Zoom · 화상통화", en: "Video call" },
        { icon: "📞", ko: "전화상담", en: "Phone" },
        { icon: "💬", ko: "카카오톡 · 왓츠앱", en: "Chat" },
        { icon: "📍", ko: "대면 상담 (함부르크 · 독일)", en: "In-person (Hamburg only)" },
      ],
    },
    pricing: {
      label: { ko: "상담 요금", en: "Pricing" },
      personalLabel: { ko: "개인 상담", en: "Personal sessions" },
      couplesLabel: { ko: "커플/부부 상담", en: "Couples sessions" },
      personal: [
        {
          id: "individual-session",
          title: { ko: "1:1 온라인 상담", en: "1:1 online session" },
          desc: {
            ko: "50분 · 지금 가장 필요한 문제부터 한 번 차분히 이야기해보고 싶은 분께",
            en: "50 min · for a calm conversation about what matters most right now",
          },
          price: { ko: "50€", en: "€50" },
          subPrice: { ko: "Cal.eu에서 바로 예약", en: "Book directly on Cal.eu" },
          badge: null,
          featured: false,
        },
        {
          id: "individual-program",
          title: { ko: "4주 개인 프로그램", en: "4-week individual program" },
          desc: {
            ko: "50분 × 4회 · 한 번의 대화보다, 4주 동안 꾸준히 정리하고 싶은 분께",
            en: "50 min × 4 · for those who want more than one conversation — four weeks of steady work",
          },
          price: { ko: "180€", en: "€180" },
          subPrice: { ko: "50분 × 4회 · 회당 45€", en: "50 min × 4 · €45/session" },
          badge: { ko: "추천", en: "Recommended" },
          featured: true,
        },
        {
          id: "intensive-individual-program",
          title: { ko: "4주 집중 개인 프로그램", en: "4-week intensive program" },
          desc: {
            ko: "50분 × 8회 · 짧은 기간 동안 주 2회로 집중적인 점검이 필요한 분께",
            en: "50 min × 8 · for focused support twice a week over a short period",
          },
          price: { ko: "360€", en: "€360" },
          subPrice: { ko: "50분 × 8회 · 회당 45€", en: "50 min × 8 · €45/session" },
          badge: { ko: "집중 지원", en: "Focused" },
          featured: false,
        },
      ],
      couples: [
        {
          id: "couple-session",
          title: { ko: "1회 커플 상담", en: "Single couple session" },
          desc: {
            ko: "70분 · 두 사람의 감정과 갈등을 한 번 차분히 정리해보고 싶은 커플에게",
            en: "70 min · for couples who want a calm conversation about their feelings and conflicts",
          },
          price: { ko: "100€", en: "€100" },
          subPrice: null,
          badge: null,
          featured: false,
        },
        {
          id: "couple-program",
          title: { ko: "한 달 커플 패키지", en: "Monthly couple package" },
          desc: {
            ko: "70분 × 4회 · 반복되는 갈등을 한 번의 대화로 끝내지 않고, 4주 동안 함께 정리합니다.",
            en: "70 min × 4 · instead of ending recurring conflict with a single conversation, we work through it together over four weeks.",
          },
          price: { ko: "360€", en: "€360" },
          subPrice: { ko: "70분 × 4회 · 회당 90€", en: "70 min × 4 · €90/session" },
          badge: { ko: "커플 추천", en: "For couples" },
          featured: true,
        },
      ],
      notes: [
        {
          ko: "* 영어·독일어 파트너 소통 지원 가능합니다.",
          en: "* English and German partner communication is available.",
        },
      ],
    },
  },
  about: {
    eyebrow: { ko: "소개", en: "About" },
    name: { ko: "김겨울", en: "Kim Kyeoul" },
    location: "Hamburg, Germany",
    credentials: {
      ko: "해외 거주 한국인을 위한 정서·관계·정체성 상담 지원",
      en: "Emotional, relationship, and identity support for Koreans abroad",
    },
    bio: {
      ko: "저는 오래전부터 사람의 말보다 그 뒤에 있는 감정을 먼저 느끼는 사람이었습니다. 심리학을 공부하며 그 감각을 학문으로 다듬었고, 오랜 인터뷰 경험을 통해 말하지 못한 감정과 반복되는 관계의 맥락을 읽어내는 능력을 키워왔습니다. 저 역시 외국에서 오래 이방인으로 살아오며 여러 번 무너지고 다시 일어섰습니다. 그래서 해외에서 사랑, 일, 관계, 정체성이 흔들릴 때의 외로움과 두려움을 잘 압니다. 지금은 해외에 사는 한국인들이 자신의 감정과 관계를 더 안전하게 이해하고 회복할 수 있도록 함께합니다.",
      en: "I have lived abroad for many years, and I know how lonely it can feel when love, work, relationships, and identity start to shake at the same time. My background in psychology and long-form interviewing shaped the way I listen: I pay attention to the emotions beneath the words and the patterns that keep repeating. Now I support Koreans abroad as they reconnect with themselves and find steadier ground.",
    },
  },
  testimonials: {
    eyebrow: { ko: "후기", en: "Testimonials" },
    heading: {
      ko: "함께한 분들의 이야기",
      en: "What others have shared",
    },
    cards: [
      {
        text: "상담 후 처음으로 내 감정에 이름을 붙일 수 있었어요. 그동안 혼자 이게 뭔지도 모르고 버텨왔던 것 같아요.",
        source: "독일 거주 · 30대",
      },
      {
        text: "말하지 않아도 알아주는 느낌이 있었어요. 한국어로 이야기할 수 있다는 것만으로도 완전히 달랐어요.",
        source: "오스트리아 거주 · 20대",
      },
      {
        text: "혼자가 아니라는 걸 처음으로 느꼈어요. 여기 연락하길 잘했다고 생각해요.",
        source: "영국 거주 · 30대",
      },
    ],
  },
  booking: {
    eyebrow: { ko: "예약 · 문의", en: "Book & Contact" },
    heading: {
      ko: "혼자 정리하기 어려운 마음이라면,\n여기서부터 이야기해보세요.",
      en: "When it feels hard to work through things alone,\nstart the conversation here.",
    },
    note: {
      ko: "온라인 1:1 · 관계/정서 · 커플 상담",
      en: "Online 1:1 · emotional/relationship support · couples sessions",
    },
    intro: {
      ko: "관계, 외로움, 자존감, 해외생활의 복잡한 마음을\n한국어로 천천히 정리합니다.",
      en: "Take your time to work through relationships, loneliness, self-worth, and the complex feelings of life abroad in Korean.",
    },
    bookBtn: ctaLabels.book,
    kakaoBtn: ctaLabels.inquire,
    bookingHint: {
      ko: "나에게 맞는 상담을 선택한 뒤 예약이나 문의를 이어가세요.",
      en: "Choose the support that fits you, then continue to booking or an inquiry.",
    },
    sessionBookingHint: {
      ko: "원하는 시간을 먼저 예약해 주세요.",
      en: "Choose a time that works for you.",
    },
    programScheduleHint: {
      ko: "첫 회기 예약 후 나머지 일정은 함께 조율합니다.",
      en: "After you book the first session, we arrange the rest together.",
    },
    stepsLabel: { ko: "4주 동안 이렇게 진행돼요", en: "How the four weeks unfold" },
    inquiryHint: {
      ko: "카카오톡으로 편하게 문의해 주세요. 한 문장만 보내도 괜찮습니다.",
      en: "Send a question on KakaoTalk. One sentence is enough to begin.",
    },
  },
  footer: {
    tagline: {
      ko: "해외에 사는 한국인을 위한 한국어 마음상담",
      en: "Heartfelt Korean support for life abroad",
    },
    location: "Hamburg, Germany",
    instagram: "@mindcare.abroad",
    legal: {
      ko: "Mindcare Abroad는 임상 심리치료나 정신과 치료가 아닌 마음케어·상담 지원 서비스를 제공합니다. 자해 위험, 위기 상황, 긴급한 의료 문제가 있다면 거주 국가의 응급 서비스나 전문 의료기관에 즉시 연락해 주세요.",
      en: "Mindcare Abroad provides counseling support, not clinical psychotherapy or psychiatric treatment. If you are in immediate danger or a medical emergency, please contact local emergency services or a licensed medical provider.",
    },
    hiddenSeo:
      "독일 한국인 상담, 유럽 한국어 상담, 해외 한국인 마음상담, 온라인 한국어 상담, 이민 스트레스 상담, 국제커플 상담, 함부르크 한국인 상담, Korean counseling in Germany and Europe.",
  },
};
