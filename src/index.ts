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

interface GradientThemeElement
  extends IThemeElement<{
    alpha?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  }> {
  type: "gradient";
}

export type ThemeElement = RectangleThemeElement | GradientThemeElement;

export type GetElementsFn = (
  replyClipId: string,
  answerClipId: string,
  askEpisodeTitle: string,
  replyClipDuration: number,
  replyClipDisplayName: string,
  answerClipDuration: number,
  answerClipDisplayName: string,
  hostPromoText: string | null
) => Array<ThemeElement>;
