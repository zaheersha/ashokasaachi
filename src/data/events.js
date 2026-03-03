import event01 from '../assets/events/event-01.svg'
import event02 from '../assets/events/event-02.svg'
import event03 from '../assets/events/event-03.svg'
import event04 from '../assets/events/event-04.svg'
import event05 from '../assets/events/event-05.svg'
import event06 from '../assets/events/event-06.svg'

const eventsByYear = [
  {
    year: 2024,
    events: [
      {
        id: '2024-Woman-leadership-summit',
        title: 'Woman Leadership Summit',
        date: 'March 1, 2024',
        location: 'New Delhi',
        summary: 'A national summit spotlighting executive leadership pathways for Woman.',
        description:
          'The Woman Leadership Summit convened industry leaders, policymakers, and founders to map the future of inclusive leadership across India. The event featured mentorship circles, keynote sessions, and strategic networking.',
        images: [event01, event02, event03],
      },
      {
        id: '2024-Woman-in-tech',
        title: 'Woman in Tech',
        date: 'February 10, 2024',
        location: 'Bengaluru',
        summary: 'Celebrating innovators and product leaders shaping the future of technology.',
        description:
          'Woman in Tech featured rapid-fire demos, innovation showcases, and a hiring lounge for Woman in engineering, data, and product leadership roles.',
        images: [event04, event05, event06],
      },
      {
        id: '2024-startup-forum',
        title: 'Startup Forum',
        date: 'January 22, 2024',
        location: 'Mumbai',
        summary: 'A platform for Woman founders to pitch, learn, and connect with investors.',
        description:
          'The Startup Forum connected early-stage founders with investors, brand partners, and accelerators. Workshops focused on scaling operations and building resilient teams.',
        images: [event02, event05, event01],
      },
      {
        id: '2024-business-expo',
        title: 'Business Expo',
        date: 'December 5, 2024',
        location: 'Hyderabad',
        summary: 'Showcasing Woman-led enterprises and growth-stage businesses.',
        description:
          'Business Expo showcased high-growth ventures and featured retail partnerships, growth coaching, and curated buyer meetings.',
        images: [event03, event04, event06],
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        id: '2023-business-expo',
        title: 'Business Expo',
        date: 'November 12, 2023',
        location: 'Chennai',
        summary: 'Connecting Woman-led businesses with national retail partners.',
        description:
          'The 2023 Business Expo focused on market access for Woman-led enterprises, featuring curated buyer meetings and brand showcases.',
        images: [event05, event01, event03],
      },
      {
        id: '2023-saachi-awards',
        title: 'SAACHI Awards',
        date: 'September 5, 2023',
        location: 'Pune',
        summary: 'Honoring Woman leaders making transformational impact.',
        description:
          'The SAACHI Awards celebrated trailblazing Woman across entrepreneurship, corporate leadership, and social change. The ceremony featured inspiring acceptance stories and community recognition.',
        images: [event06, event02, event04],
      },
      {
        id: '2023-entrepreneurship-seminar',
        title: 'Entrepreneurship Seminar',
        date: 'July 25, 2023',
        location: 'Hyderabad',
        summary: 'A seminar focused on scaling Woman-led ventures sustainably.',
        description:
          'Entrepreneurship Seminar delivered growth blueprints for founders and showcased stories of scaling with purpose.',
        images: [event01, event06, event05],
      },
      {
        id: '2023-Woman-in-business',
        title: 'Woman in Business',
        date: 'May 18, 2023',
        location: 'Kolkata',
        summary: 'Leadership workshops and peer circles for Woman executives.',
        description:
          'Woman in Business offered peer circles, coaching, and networking sessions that focused on career growth and leadership readiness.',
        images: [event04, event03, event02],
      },
    ],
  },
]

export default eventsByYear
