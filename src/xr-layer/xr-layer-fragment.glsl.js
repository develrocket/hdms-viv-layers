export default `\
#define SHADER_NAME xr-layer-fragment-shader

precision highp float;
precision highp int;
precision highp SAMPLER_TYPE;

// our texture
uniform SAMPLER_TYPE channel0;
uniform SAMPLER_TYPE channel1;
uniform SAMPLER_TYPE channel2;
uniform SAMPLER_TYPE channel3;
uniform SAMPLER_TYPE channel4;
uniform SAMPLER_TYPE channel5;
uniform SAMPLER_TYPE channel6;
uniform SAMPLER_TYPE channel7;
uniform SAMPLER_TYPE channel8;
uniform SAMPLER_TYPE channel9;
uniform SAMPLER_TYPE channel10;
uniform SAMPLER_TYPE channel11;
uniform SAMPLER_TYPE channel12;
uniform SAMPLER_TYPE channel13;
uniform SAMPLER_TYPE channel14;
uniform SAMPLER_TYPE channel15;

in vec2 vTexCoord;

// range
uniform vec2 contrastLimits[16];

void main() {

  float intensity0 = float(texture(channel0, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity0, contrastLimits[0], 0);
  float intensity1 = float(texture(channel1, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity1, contrastLimits[1], 1);
  float intensity2 = float(texture(channel2, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity2, contrastLimits[2], 2);
  float intensity3 = float(texture(channel3, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity3, contrastLimits[3], 3);
  float intensity4 = float(texture(channel4, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity4, contrastLimits[4], 4);
  float intensity5 = float(texture(channel5, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity5, contrastLimits[5], 5);
  float intensity6 = float(texture(channel6, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity6, contrastLimits[6], 6);
  float intensity7 = float(texture(channel7, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity7, contrastLimits[7], 7);
  float intensity8 = float(texture(channel8, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity8, contrastLimits[8], 8);
  float intensity9 = float(texture(channel9, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity9, contrastLimits[9], 9);
  float intensity10 = float(texture(channel10, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity10, contrastLimits[10], 10);
  float intensity11 = float(texture(channel11, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity11, contrastLimits[11], 11);
  float intensity12 = float(texture(channel12, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity12, contrastLimits[12], 12);
  float intensity13 = float(texture(channel13, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity13, contrastLimits[13], 13);
  float intensity14 = float(texture(channel14, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity14, contrastLimits[14], 14);
  float intensity15 = float(texture(channel15, vTexCoord).r);
  DECKGL_PROCESS_INTENSITY(intensity15, contrastLimits[15], 15);

  DECKGL_MUTATE_COLOR(gl_FragColor, intensity0, intensity1, intensity2, intensity3, intensity4, intensity5, intensity6, intensity7, intensity8, intensity9, intensity10, intensity11, intensity12, intensity13, intensity14, intensity15, vTexCoord);


  geometry.uv = vTexCoord;
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`;
