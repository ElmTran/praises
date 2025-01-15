import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const ptBR: ComputedRef<LanguageOption> = computed(() => ({
  value: "pt-BR",
  label: $t("tts.azure.options.language.pt_BR"),
  speakers: [
    {
      value: "pt-BR-FranciscaNeural",
      label: $t("tts.azure.options.speaker.francisca"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
        {
          value: "calm",
            label: $t("tts.azure.options.style.calm"),
        }
      ],
    },
    {
      value: "pt-BR-AntonioNeural",
      label: $t("tts.azure.options.speaker.antonio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-BrendaNeural",
      label: $t("tts.azure.options.speaker.brenda"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-DonatoNeural",
      label: $t("tts.azure.options.speaker.donato"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-ElzaNeural",
      label: $t("tts.azure.options.speaker.elza"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-FabioNeural",
      label: $t("tts.azure.options.speaker.fabio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-GiovannaNeural",
      label: $t("tts.azure.options.speaker.giovanna"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-HumbertoNeural",
      label: $t("tts.azure.options.speaker.humberto"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-JulioNeural",
      label: $t("tts.azure.options.speaker.julio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-LeilaNeural",
      label: $t("tts.azure.options.speaker.leila"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-LeticiaNeural",
      label: $t("tts.azure.options.speaker.leticia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-ManuelaNeural",
      label: $t("tts.azure.options.speaker.manuela"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-NicolauNeural",
      label: $t("tts.azure.options.speaker.nicolau"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-ThalitaNeural",
      label: $t("tts.azure.options.speaker.thalita"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-ValerioNeural",
      label: $t("tts.azure.options.speaker.valerio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-YaraNeural",
      label: $t("tts.azure.options.speaker.yara"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-MacerioMultilingualNeural",
      label: $t("tts.azure.options.speaker.macerio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-BR-ThalitaMultilingualNeural",
      label: $t("tts.azure.options.speaker.thalita_multilingual"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
