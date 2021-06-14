export { getElements } from "./getElements";

export type VideoComposition = {
  videos: Array<{ type: "clip"; clipId: string }>;
};
export type GetVideoCompositionFn = () => VideoComposition;

export type InvitationPreviewGeneratorFn = (opts: object) => void;

export type CustomDataDescriptor = { key: string };
export type GetCustomDataDescriptorsFn = () => CustomDataDescriptor[];

type ImageData = {
  path?: string;
  width?: number;
  height?: number;
  link?: string;
};

export type SiteData = {
  customCssKey?: string;
  meta?: {
    title?: string;
    description?: string;
  };
  icon?: ImageData;
  logo?: ImageData;
  brandColor?: string;
  networkError?: string;
  unknownError?: string;
  introScreen?: {
    playButtonSVG?: string;
    recordButtonLabel?: string;
    readyButtonLabel?: string;
    uploadLinkLabel?: string;
    readyDescription?: string;
    termsMarkup?: string;
    extraTerms?: string;
  };
  introScreenDesktop?: {
    markup?: string;
  };
  nameScreen?: {
    nameLabel?: string;
    nameValidation?: string;
    socialValidation?: string;
    socialDescription?: string;
    titleUploading?: string;
    titleHitSave?: string;
    instructions?: string;
    pleaseWait?: string;
    editButtonLabel?: string;
    saveButtonLabel?: string;
    nameScreenHeader?: string;
  };
  emailScreen?: {
    title?: string;
    emailInputPlaceholder?: string;
    buttonLabel?: string;
    buttonSkipLabel?: string;
  };
  closedScreen?: {
    markup?: string;
  };
  successScreen?: {
    markup?: string;
  };
  warningCamera?: {
    description?: string;
    dismissButtonLabel?: string;
  };
  warningNetwork?: {
    title?: string;
    description?: string;
    redoButtonLabel?: string;
  };
  warningSilent?: {
    title?: string;
    description?: string;
    redoButtonLabel?: string;
    continueLinkLabel?: string;
  };
  warningWide?: {
    title?: string;
    description?: string;
    redoButtonLabel?: string;
    continueLinkLabel?: string;
  };
};

export type SiteDataGetterFn = () => Promise<SiteData>;

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

interface IThemeElement<
  Type extends string,
  TProps extends Record<string, any>
> {
  type: Type;
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

interface RectangleThemeElement extends IThemeElement<"rect", RectangleProps> {}

type GradientProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rVal?: number;
  gVal?: number;
  bVal?: number;
};

interface GradientThemeElement
  extends IThemeElement<"gradient", GradientProps> {}

type VideoProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export enum VideoSource {
  Clip = "clip",
  Theme = "theme",
}

interface VideoThemeElement extends IThemeElement<"video", VideoProps> {
  videoKey: string;
  source: VideoSource;
}

interface TextThemeElement extends IThemeElement<"text", TextProps> {
  fontKey?: string;
}

type ImageProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  imageKey: string;
};

export enum TextAlign {
  Left = "left",
  Center = "center",
  Right = "right",
}
export enum OriginY {
  Top = "top",
  Center = "center",
  Bottom = "bottom",
}

interface ImageThemeElement extends IThemeElement<"image", ImageProps> {}

type TextProps = {
  value: string;
  fontSize: number;
  lineHeight?: number;
  fontName: string;
  textAlign: TextAlign;
  originY?: OriginY;
  color: string;
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

type FrameProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  videoKey: string;
  position: "first" | "last";
};

interface FrameThemeElement extends IThemeElement<"frame", FrameProps> {}

export type ThemeElement =
  | RectangleThemeElement
  | GradientThemeElement
  | VideoThemeElement
  | FrameThemeElement
  | TextThemeElement
  | ImageThemeElement;

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
