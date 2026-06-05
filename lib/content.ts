export type Lang = "ko" | "en";

export const content = {
  nav: {
    logo: "Mindcare Abroad",
    lang: { ko: "EN", en: "KO" },
    cta: { ko: "예약하기", en: "Book a session" },
  },
  hero: {
    headline: {
      ko: "낯선 나라에서 혼자 견디는 당신의 마음",
      en: "Your heart, surviving alone in a foreign land",
    },
    sub: {
      ko: "함께 다시 숨 쉬게 합니다",
      en: "Let's breathe again, together",
    },
    cta: {
      ko: "지금 바로 카카오톡으로 문의하기",
      en: "Chat on KakaoTalk",
    },
    ctaSecondary: {
      ko: "예약폼 작성하기",
      en: "Fill out booking form",
    },
  },
  forYou: {
    eyebrow: { ko: "이런 분께 맞습니다", en: "Who this is for" },
    heading: {
      ko: "혹시 이런 마음이 드셨나요?",
      en: "Does any of this feel familiar?",
    },
    intro: {
      ko: "독일, 프랑스, 영국, 스위스… 어디에 살든 낯선 나라에서 느끼는 감정은 비슷합니다. 영어로 설명하기 힘들었던 그 마음, 한국어로 이야기해요.",
      en: "Whether you're in Germany, France, the UK, or Switzerland — the feelings of living abroad are often the same. What you couldn't express in another language, let's talk about in Korean.",
    },
    cards: [
      {
        icon: "🌍",
        title: {
          ko: "외국에서 혼자 마음이 무너질 때",
          en: "When your heart breaks alone abroad",
        },
        desc: {
          ko: "외로움, 무기력, 정체성 혼란… 이유 없이 그냥 힘들 때",
          en: "When loneliness, fatigue, and identity confusion make everything feel heavy for no clear reason",
        },
      },
      {
        icon: "⏰",
        title: {
          ko: "시차 때문에 전화도 못 할 때",
          en: "When time zones keep you from calling",
        },
        desc: {
          ko: "가장 힘든 순간, 연락할 수 있는 사람이 한 명도 없을 때",
          en: "When you need someone most but can't reach anyone because of time differences",
        },
      },
      {
        icon: "💔",
        title: {
          ko: "파트너와 문화 차이로 마음이 다칠 때",
          en: "When culture clashes hurt your relationship",
        },
        desc: {
          ko: "문화도 언어도 다른 파트너와 서로 상처만 주는 관계에서 누군가가 필요할 때",
          en: "When cultural and language differences leave you both hurting, and you need someone in your corner",
        },
      },
      {
        icon: "🤍",
        title: {
          ko: "혼자 버티는 게 한계일 때",
          en: "When holding on by yourself becomes too much",
        },
        desc: {
          ko: "대단한 게 아니라 그냥 내 얘기 들어줄 사람이 필요할 때",
          en: "It's not about being strong — it's about needing someone to listen to you",
        },
      },
      {
        icon: "💼",
        title: {
          ko: "나르시시스트 관계에서",
          en: "In a narcissistic relationship",
        },
        desc: {
          ko: "분명 상처받았는데 내 잘못인 것 같은 느낌, 내가 이상한 건지 혼란스러울 때",
          en: "When you know you're hurt but feel like it must be your fault, and you're left wondering if you're the problem",
        },
      },
      {
        icon: "🧭",
        title: {
          ko: "어디에도 속하지 못하는 것 같을 때",
          en: "When you feel like you belong nowhere",
        },
        desc: {
          ko: "한국도 여기도 아닌, 그 사이 어딘가에 이방인으로 혼자 외딴섬에 있는 느낌",
          en: "When you feel like a stranger stuck between Korea and here, alone on an island of your own",
        },
      },
    ],
  },
  services: {
    eyebrow: { ko: "마음 케어", en: "Care" },
    heading: {
      ko: "당신의 마음, 이곳에서 함께 풀어요",
      en: "On your terms",
    },
    items: [
      {
        title: { ko: "정서 회복", en: "Emotional Recovery" },
        hook: {
          ko: "이유도 모르게 그냥 힘든 날들이 계속되고 있나요?",
          en: "Have you been having days where everything just feels heavy for no clear reason?",
        },
        desc: {
          ko: "외로움, 우울, 무기력, 정체성 혼란. 당신의 하루가 다시 숨 쉬기 시작하도록.",
          en: "Loneliness, depression, fatigue, identity confusion. Let's help your day breathe again.",
        },
      },
      {
        title: { ko: "관계·연애 케어", en: "Relationship & Dating" },
        hook: {
          ko: "왜 항상 이런 사람만 만나는 걸까, 싶었던 적 있나요?",
          en: "Have you ever wondered why you keep meeting the same kind of person?",
        },
        desc: {
          ko: "나르시시스트 관계 상처, 회피형 파트너, 반복되는 연애 패턴. 감정의 구조를 함께 읽어드립니다.",
          en: "Narcissistic relationship wounds, avoidant partners, repeated dating patterns. We read the structure of your emotions together.",
        },
      },
      {
        title: {
          ko: "해외 부부·커플 감정 번역",
          en: "Emotional Translation for Couples",
        },
        hook: {
          ko: "분명히 사랑하는데 왜 이렇게 서로 상처만 줄까요?",
          en: "You love each other — so why does it keep hurting?",
        },
        desc: {
          ko: "문화도 언어도 다른 두 사람의 마음을 번역합니다. 영어·독일어 파트너 소통 지원 가능.",
          en: "We translate the emotional languages of two people from different cultures. English & German partner communication supported.",
        },
      },
      {
        title: { ko: "자존감 회복", en: "Rebuilding Self-Worth" },
        hook: {
          ko: "오래 혼자 버텨오다 보니 나 자신을 잃어버린 것 같나요?",
          en: "After holding everything alone for so long, have you lost touch with yourself?",
        },
        desc: {
          ko: "무너진 자존감과 자기 신뢰를 다시 세워갑니다.",
          en: "Rebuilding the confidence and self-trust that have quietly eroded.",
        },
      },
    ],
    formats: {
      label: { ko: "진행 방식", en: "Session formats" },
      list: [
        { icon: "🎥", ko: "Zoom · 화상통화", en: "Video call" },
        { icon: "📞", ko: "전화통화", en: "Phone" },
        { icon: "💬", ko: "카카오톡 · 왓츠앱", en: "Chat" },
        {
          icon: "📍",
          ko: "대면 (함부르크 · 독일)",
          en: "In-person (Hamburg only)",
        },
      ],
    },
    pricing: {
      label: { ko: "세션 요금", en: "Pricing" },
      personal: [
        {
          title: { ko: "한 달 집중 케어", en: "Monthly intensive" },
          desc: {
            ko: "주 2회 x 4주 · 빠르게 변화를 원하는 분께",
            en: "2x week x 4 weeks · Faster progress",
          },
          price: { ko: "280€", en: "€280" },
          subPrice: { ko: "회당 35€", en: "€35 per session" },
          badge: null,
        },
        {
          title: { ko: "한 달 패키지", en: "Monthly package" },
          desc: {
            ko: "주 1회 x 4주 · 꾸준히 함께 나아가요",
            en: "1x week x 4 weeks · Steady progress",
          },
          price: { ko: "160€", en: "€160" },
          subPrice: { ko: "회당 40€ · 1회보다 10€ 저렴", en: "€40/session · €10 less than single" },
          badge: { ko: "⭐ 추천", en: "★ Recommended" },
        },
        {
          title: { ko: "1회 체험", en: "Single session" },
          desc: {
            ko: "50분 · 부담 없이 한 번 시작해보세요",
            en: "50 min · Try it out",
          },
          price: { ko: "50€", en: "€50" },
          subPrice: null,
          badge: null,
        },
      ],
      couples: [
        {
          title: { ko: "한 달 커플 패키지", en: "Monthly couple package" },
          desc: {
            ko: "주 1회 x 4주 · 관계를 다시 연결해요",
            en: "1x week x 4 weeks · Reconnect your relationship",
          },
          price: { ko: "280€", en: "€280" },
          subPrice: { ko: "회당 70€ · 1회보다 10€ 저렴", en: "€70/session · €10 less than single" },
          badge: { ko: "⭐ 추천", en: "★ Recommended" },
        },
        {
          title: { ko: "1회 커플 체험", en: "Single couple session" },
          desc: {
            ko: "50분 · 두 사람의 마음을 함께 풀어요",
            en: "50 min · We explore both of your minds together",
          },
          price: { ko: "80€", en: "€80" },
          subPrice: null,
          badge: null,
        },
      ],
      notes: [
        {
          ko: "* 현재 소수 인원만 받고 있습니다",
          en: "* Only a small number of clients are accepted at this time",
        },
        {
          ko: "* 영어 · 독일어 파트너 소통 지원 가능",
          en: "* English & German partner communication available",
        },
      ],
    },
  },
  about: {
    eyebrow: { ko: "소개", en: "About" },
    name: { ko: "김겨울", en: "Kim Kyeoul" },
    location: "Hamburg, Germany",
    bio: {
      ko: "오래전부터 사람의 말보다 그 뒤에 있는 감정을 먼저 느끼는 사람이었습니다. 심리학을 전공하며 그 감각을 학문으로 다듬었고, 오랜 인터뷰 경험을 통해 말하지 못한 감정과 숨은 맥락을 읽어내는 능력을 키워왔습니다. 저는 외국에서 오래 이방인으로 살아오며 여러 번 무너지고, 존재의 가치가 사라질 만큼 바닥을 치고 다시 일어섰습니다. 사랑, 일, 관계 속에서 정체성이 흔들릴 때 어떤 감정인지, 아픈 마음을 어디에도 털어놓지 못한 채 혼자 감당해야 했던 외로움이 얼마나 깊은지 누구보다 잘 압니다. 그 경험을 지나며 저는 사람의 마음과 반복되는 패턴을 정확히 읽어내는 능력을 갖게 되었습니다. 지금은 외국에서 흔들리는 분들의 감정·관계·정체성을 함께 이해하고, 안전하게 회복의 길로 안내합니다.",
      en: "I have lived as a foreigner abroad for many years — falling apart more than once, hitting a point where I questioned my own worth, and finding my way back. I know deeply what it feels like when love, work, and relationships shake your sense of who you are. That journey gave me the ability to read people's emotional patterns with precision. Now I help Koreans living abroad reconnect with themselves and find their way back.",
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
        text: "말하지 않아도 알아주는 느낌이었어요. 한국어로 이야기할 수 있다는 것만으로도 완전히 달랐어요.",
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
      ko: "혼자 버티지 않아도 됩니다",
      en: "Take the first step today",
    },
    note: {
      ko: "당신의 마음, 여기서부터 다시 시작할 수 있어요",
      en: "Video sessions available across Europe",
    },
    bookBtn: { ko: "첫 대화 시작하기", en: "Book a session" },
    kakaoBtn: { ko: "카카오톡으로 문의", en: "Message on KakaoTalk" },
    form: {
      name: { ko: "이름", en: "Name" },
      email: { ko: "이메일", en: "Email" },
      message: { ko: "메시지", en: "Message" },
      lang: { ko: "선호 언어", en: "Preferred language" },
      langOpts: [
        { value: "ko", label: { ko: "한국어", en: "Korean" } },
        { value: "en", label: { ko: "영어", en: "English" } },
      ],
      submit: { ko: "보내기", en: "Send message" },
    },
  },
  footer: {
    tagline: {
      ko: "해외에 사는 한국인을 위한 마음 상담",
      en: "Heartfelt support for Koreans living abroad",
    },
    location: "Hamburg, Germany",
    instagram: "@mindcareabroad",
    legal: {
      ko: "Mindcare Abroad는 임상 심리치료나 정신과 치료가 아닌 마음 케어 서비스를 제공합니다.",
      en: "Mindcare Abroad provides counseling support, not clinical psychotherapy or psychiatric treatment.",
    },
  },
};
