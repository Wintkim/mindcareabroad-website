export type Lang = 'ko' | 'en'

export const content = {
  nav: {
    logo: 'Mindcare Abroad',
    lang: { ko: 'EN', en: 'KO' },
    cta: { ko: '예약하기', en: 'Book a session' },
  },
  hero: {
    headline: {
      ko: '외국에서 혼자\n버티지 않아도 괜찮아요',
      en: "You don't have to\nendure it alone abroad",
    },
    sub: {
      ko: '한국인 마음을 위한 1:1 온라인 상담',
      en: '1-on-1 online counseling for Korean minds',
    },
    cta: {
      ko: '1분 만에 예약·문의하기',
      en: 'Book in 1 minute',
    },
  },
  forYou: {
    eyebrow: { ko: '이런 분께 맞습니다', en: 'Who this is for' },
    heading: {
      ko: '혹시 이런 마음이 드셨나요?',
      en: 'Does any of this feel familiar?',
    },
    intro: {
      ko: '독일, 프랑스, 영국, 스위스… 어디에 살든 낯선 나라에서 느끼는 감정은 비슷합니다. 영어로 설명하기 힘들었던 그 마음, 한국어로 이야기해요.',
      en: "Whether you're in Germany, France, the UK, or Switzerland — the feelings of living abroad are often the same. What you couldn't express in another language, let's talk about in Korean.",
    },
    cards: [
      {
        icon: '🌍',
        title: { ko: '문화적 적응', en: 'Cultural adjustment' },
        desc: {
          ko: '이 나라에서 나는 누구인가, 어디에 속하는가',
          en: 'Who am I here, and where do I belong?',
        },
      },
      {
        icon: '🌧',
        title: { ko: '불안·우울', en: 'Anxiety & depression' },
        desc: {
          ko: '이유 없이 무겁고, 아무것도 하기 싫을 때',
          en: "When everything feels heavy and you can't explain why",
        },
      },
      {
        icon: '💬',
        title: { ko: '관계', en: 'Relationships' },
        desc: {
          ko: '가족, 연인, 친구와의 거리감과 오해',
          en: 'Distance and misunderstanding with family, partners, or friends',
        },
      },
      {
        icon: '🤍',
        title: { ko: '트라우마', en: 'Trauma' },
        desc: {
          ko: '오래된 상처가 지금 여기서도 따라올 때',
          en: 'When old wounds follow you into the present',
        },
      },
      {
        icon: '💼',
        title: { ko: '커리어 스트레스', en: 'Career stress' },
        desc: {
          ko: '이 나라에서 살아남아야 한다는 압박감',
          en: 'The pressure of building a life in a foreign country',
        },
      },
    ],
  },
  services: {
    eyebrow: { ko: '상담 서비스', en: 'Services' },
    heading: {
      ko: '나에게 맞는 방식으로',
      en: 'On your terms',
    },
    items: [
      {
        title: { ko: '1:1 개인 상담', en: 'Individual counseling' },
        desc: {
          ko: '나 자신에게 집중하는 시간. 한 회기 50분, 정기적으로 진행합니다.',
          en: 'Dedicated time for yourself. 50 minutes per session, on a regular cadence.',
        },
      },
      {
        title: { ko: '커플 상담', en: 'Couples counseling' },
        desc: {
          ko: '파트너와 함께, 또는 각자 따로 진행할 수 있습니다.',
          en: 'Together with your partner, or separately — whichever feels right.',
        },
      },
    ],
    formats: {
      label: { ko: '진행 방식', en: 'Session formats' },
      list: [
        { ko: '화상 통화', en: 'Video call' },
        { ko: '전화', en: 'Phone' },
        { ko: '채팅', en: 'Chat' },
        { ko: '대면 (함부르크)', en: 'In-person (Hamburg only)' },
      ],
    },
    pricing: {
      label: { ko: '상담 요금', en: 'Pricing' },
      value: { ko: '가격 문의', en: 'Pricing on request' },
    },
    note: {
      ko: '* 모든 상담은 한국어로 진행됩니다',
      en: '* All sessions are conducted in Korean',
    },
  },
  about: {
    eyebrow: { ko: '상담사 소개', en: 'About' },
    name: { ko: '김겨울', en: 'Kim Kyeoul' },
    location: 'Hamburg, Germany',
    bio: {
      ko: '저는 10년째 독일 함부르크에서 살고 있는 한국인입니다. 낯선 나라에서 혼자 버텨야 했던 경험이 있기에, 해외에 사는 한국인들의 마음을 누구보다 잘 이해합니다.',
      en: "I'm a Korean who has been living in Hamburg, Germany for 10 years. Having navigated life abroad myself, I understand deeply what it means to carry that weight alone.",
    },
  },
  howItWorks: {
    eyebrow: { ko: '진행 방식', en: 'How it works' },
    heading: {
      ko: '세 단계로 시작해요',
      en: 'Three steps to get started',
    },
    steps: [
      {
        number: '01',
        title: { ko: '예약하기', en: 'Book' },
        desc: {
          ko: '간단한 양식을 작성하거나 예약 링크를 클릭하세요.',
          en: 'Fill out a short form or click the booking link.',
        },
      },
      {
        number: '02',
        title: { ko: '첫 상담', en: 'First session' },
        desc: {
          ko: '서로를 알아가는 시간입니다. 부담 없이 이야기해요.',
          en: 'A chance to get to know each other. No pressure, just conversation.',
        },
      },
      {
        number: '03',
        title: { ko: '함께 나아가기', en: 'Ongoing support' },
        desc: {
          ko: '나에게 맞는 속도로, 정기적인 상담을 이어갑니다.',
          en: 'Regular sessions at your own pace, for as long as you need.',
        },
      },
    ],
  },
  booking: {
    eyebrow: { ko: '예약 · 문의', en: 'Book & Contact' },
    heading: {
      ko: '지금 첫 걸음을 내딛어요',
      en: 'Take the first step today',
    },
    note: {
      ko: '유럽 전역에서 화상 상담 가능',
      en: 'Video sessions available across Europe',
    },
    bookBtn: { ko: '예약하기', en: 'Book a session' },
    kakaoBtn: { ko: '카카오톡으로 문의', en: 'Message on KakaoTalk' },
    form: {
      name: { ko: '이름', en: 'Name' },
      email: { ko: '이메일', en: 'Email' },
      message: { ko: '메시지', en: 'Message' },
      lang: { ko: '선호 언어', en: 'Preferred language' },
      langOpts: [
        { value: 'ko', label: { ko: '한국어', en: 'Korean' } },
        { value: 'en', label: { ko: '영어', en: 'English' } },
      ],
      submit: { ko: '보내기', en: 'Send message' },
    },
  },
  footer: {
    tagline: {
      ko: '해외에 사는 한국인을 위한 마음 상담',
      en: 'Counseling for Koreans living abroad',
    },
    location: 'Hamburg, Germany',
    instagram: '@mindcareabroad',
    legal: {
      ko: 'Mindcare Abroad는 임상 심리치료나 정신과 치료가 아닌 상담 서비스를 제공합니다.',
      en: 'Mindcare Abroad provides counseling support, not clinical psychotherapy or psychiatric treatment.',
    },
  },
}
