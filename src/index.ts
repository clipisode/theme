export type VideoComposition = {
  videos: Array<{ type: "clip"; clipId: string }>;
};
export type GetVideoCompositionFn = () => VideoComposition;

export type InvitationPreviewGeneratorFn = (opts: object) => void;

export type CustomDataDescriptor = { key: string };
export type GetCustomDataDescriptorsFn = () => CustomDataDescriptor[];

interface Animation<
  TProps extends Record<string, any>,
  TField extends keyof TProps
> {
  startAt: number;
  endAt: number;
  field: TField;
  from: TProps[TField];
  to: TProps[TField];
}

interface IThemeElement<TProps extends Record<string, any>> {
  name: string;
  startAt: number;
  endAt: number;
  props: TProps;
  animations?: Animation<TProps, any>[];
}

type RectangleProps = {
  color?: string;
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface RectangleThemeElement extends IThemeElement<RectangleProps> {
  type: "rect";
}

type GradientProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface GradientThemeElement extends IThemeElement<GradientProps> {
  type: "gradient";
}

type VideoProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface VideoThemeElement extends IThemeElement<VideoProps> {
  type: "video";
}

type FrameProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface TextThemeElement extends IThemeElement<TextProps> {
  type: "text";
}

type TextProps = {
  value: string;
  fontSize: number;
  lineHeight: number;
  fontName: string;
  textAlign: "center" | "left" | "right";
  color: string;
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface FrameThemeElement extends IThemeElement<FrameProps> {
  type: "frame";
}

export type ThemeElement =
  | RectangleThemeElement
  | GradientThemeElement
  | VideoThemeElement
  | FrameThemeElement
  | TextThemeElement;

type AnswerData = {
  id: string;
  ask: {
    id: string;
    title: string;
    host: {
      id: string;
      promoText: string | null;
    } | null;
  };
  clip: {
    id: string;
    duration: number;
    displayName: string;
  };
  reply: {
    id: string;
    clip: {
      id: string;
      duration: number;
      displayName: string;
    };
  };
};

export type GetElementsFn = (answer: AnswerData) => Array<ThemeElement>;
