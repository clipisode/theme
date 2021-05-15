import { GetElementsFn, OriginY, TextAlign, VideoSource } from ".";

export const getElements: GetElementsFn = (answer) => {
  const WIDTH = 720;
  const HEIGHT = 1280;
  const SPACING = 25;
  const TITLEH = 760;
  const YOYOMIN = 5.0;
  const TITLEDURATION = 2.0;
  const ENDINGDURATION = 3.0;

  const bottomFadeRect = {
    x: 0,
    y: HEIGHT - 210,
    width: WIDTH,
    height: 210,
  };

  const displayNameTextProps = {
    fontName: "OpenSans-Regular",
    fontSize: 44,
    lineHeight: 48,
    textAlign: TextAlign.Center,
    x: SPACING,
    y: 1150,
    originY: OriginY.Center,
    width: WIDTH - SPACING * 2,
    height: 100,
    color: "#FFFFFF",
  };

  const endingTextProps = {
    fontName: "OpenSans-Regular",
    textAlign: TextAlign.Center,
    x: SPACING,
    width: WIDTH - SPACING * 2,
    color: "#FFFFFF",
  };

  return [
    {
      type: "frame",
      name: "frame.reply.first",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        videoKey: answer.reply.clip.id,
        position: "first",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "frame",
      name: "frame.reply.last",
      startAt: 2 + answer.reply.clip.duration - 0.5,
      endAt: 2 + answer.reply.clip.duration,
      props: {
        videoKey: answer.reply.clip.id,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "video",
      name: "video.reply",
      videoKey: answer.reply.clip.id,
      source: VideoSource.Clip,
      startAt: 2,
      endAt: 2 + answer.reply.clip.duration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "frame",
      name: "frame.answer.last",
      startAt:
        TITLEDURATION + answer.reply.clip.duration + answer.clip.duration - 0.5,
      endAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration +
        ENDINGDURATION,
      props: {
        videoKey: answer.clip.id,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "video",
      name: "video.answer",
      videoKey: answer.clip.id,
      source: VideoSource.Clip,
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "rect",
      name: "title.shade",
      startAt: 0,
      endAt: 2,
      props: {
        textAlign: TextAlign.Left,
        color: "#000000",
        alpha: 0.65,
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.4,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.65,
          to: 0.0,
        },
      ],
    },
    {
      type: "rect",
      name: "title.line",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        color: "#0066BB",
        alpha: 1.0,
        x: 2 * SPACING,
        y: 880,
        width: 280,
        height: 2.5,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.title",
      startAt: 0,
      endAt: TITLEDURATION - 0.1,
      props: {
        value: answer.ask.title, // " 🔥🔥🔥 mighty mighty bosstones carl weathers scarlett johansson arnold schwarzenegger"
        color: "#FFFFFF",
        fontName: "FiraSans-ExtraBold",
        fontSize: 80,
        textAlign: TextAlign.Left,
        x: 2 * SPACING,
        y: 860,
        width: WIDTH - 4 * SPACING,
        height: TITLEH,
        originY: OriginY.Bottom,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.host",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: answer.clip.displayName,
        color: "#FFFFFF",
        fontName: "OpenSans-Regular",
        fontSize: 36,
        lineHeight: 36,
        textAlign: TextAlign.Left,
        x: 2 * SPACING,
        y: 910,
        width: WIDTH - 6 * SPACING,
        height: 54,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.guest",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: "and " + answer.reply.clip.displayName,
        color: "#FFFFFF",
        fontName: "OpenSans-Regular",
        fontSize: 36,
        lineHeight: 36,
        textAlign: TextAlign.Left,
        x: 2 * SPACING,
        y: 966,
        width: WIDTH - 6 * SPACING,
        height: 54,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },

    {
      type: "gradient",
      name: "question.fade",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration,
      props: {
        alpha: 1,
        ...bottomFadeRect,
      },
      animations:
        answer.reply.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.8,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 1.6,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ],
    },
    {
      type: "text",
      name: "question.name",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration,
      props: {
        alpha: 1,
        value: answer.reply.clip.displayName,
        ...displayNameTextProps,
      },
      animations:
        answer.reply.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 1.4,
                endAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "gradient",
      name: "answer.fade",
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        alpha: 1,
        ...bottomFadeRect,
      },
      animations:
        answer.clip.duration < YOYOMIN
          ? [
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.4,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.6,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "text",
      name: "answer.name",
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        alpha: 1,
        value: answer.clip.displayName,
        ...displayNameTextProps,
      },
      animations:
        answer.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION + answer.reply.clip.duration,
                endAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION + answer.reply.clip.duration,
                endAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.4,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "rect",
      name: "ending.shade",
      startAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration -
        0.25,
      endAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration +
        ENDINGDURATION,
      props: {
        color: "#000000",
        alpha: 0.8,
        x: 0,
        y: 0,
        width: 720,
        height: 1280,
      },
      animations: [
        {
          startAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration -
            0.25,
          endAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            0.25,
          field: "alpha",
          from: 0,
          to: 0.8,
        },
      ],
    },
    {
      type: "text",
      name: "ending.name",
      startAt:
        TITLEDURATION + answer.reply.clip.duration + answer.clip.duration + 0.4,
      endAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration +
        ENDINGDURATION,
      props: {
        alpha: 1,
        value: answer.clip.displayName,
        fontSize: 54,
        lineHeight: 54,
        y: 480,
        height: 80,
        ...endingTextProps,
      },
      animations: [
        {
          startAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            0.4,
          endAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            1.0,
          field: "alpha",
          from: 0,
          to: 1,
        },
      ],
    },
    {
      type: "text",
      name: "ending.promo",
      startAt:
        TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      endAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration +
        ENDINGDURATION,
      props: {
        alpha: 1,
        value: answer.ask.host?.promoText ?? "clipisode.com",
        fontSize: 32,
        lineHeight: 45,
        y: 570,
        height: 225,
        ...endingTextProps,
      },
      animations: [
        {
          startAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            0.0,
          endAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            0.8,
          field: "alpha",
          from: 0,
          to: 0,
        },
        {
          startAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            0.8,
          endAt:
            TITLEDURATION +
            answer.reply.clip.duration +
            answer.clip.duration +
            1.6,
          field: "alpha",
          from: 0,
          to: 1,
        },
      ],
    },
  ];
};
