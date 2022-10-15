<template>
  <div class="flex flex-col gap-[2.5rem]">
    <div class="divCenter">
      <p
        id="landing_intro"
        ref="landingIntro"
        class="lg:text-xl text-md acrlyic w-auto text-center selector"
      ></p>
    </div>
    <section class="pt-2">
      <h2
        class="lg:text-2xl text-lg font-bold decoration-2"
      >
        Sobre mim
      </h2>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
         Sou um desenvolvedor de sistemas com experiência no desenvolvimento front-end e back-end,
        construindo código limpo e bem estruturado. 
        Busco aprimorar minhas competências e crescer profissionalmente na minha área de atuação. 
      </p>
    </section>
    <section class="">
      <h2
        class="lg:text-2xl text-lg font-bold decoration-2"
      >
        Resumo de minha jornada
      </h2>
      <br />
      <div class="flex flex-col gap-2">
        <p class="lg:text-lg text-sm text-justify">
          <strong>2016:</strong>
          Iniciei meu estágio na empresa BPlus Tecnologia Ltda.
        </p>
        <p class="lg:text-lg text-sm text-justify">
          <strong>2017:</strong>
          Após 3 Meses de estágio, fui contratado como Desenvolvedor Trainee Fullstack, 
          trabalhando no desenvolvimento de diversos projetos com .NET e KnockoutJS como principais ferramentas.
        </p>
        <p class="lg:text-lg text-sm text-justify">
          <strong>2018:</strong>
          Em 2018, recebi uma oportunidade para trabalhar com .NET Core, Angular e Vue, no qual adquiri
          diversas experiências e conhecimentos.
        </p>
        <p class="lg:text-lg text-sm text-justify">
          <strong>2019 - 2021:</strong>
          Nestes anos, trabalhei em diversos projetos e sistemas, com ASP.NET Classic, .NET Core, Angular, React,
          NodeJs, Arduino (C++), SQL Server e MongoDB
        </p>
        <p class="lg:text-lg text-sm text-justify">
          <strong>2020:</strong>
          Me formei como Bacharel em Sistemas de Informação pela 
          Universidade do Estado de Santa Catarina
        </p>
        <p class="lg:text-lg text-sm text-justify">
          <strong>2022:</strong>
          Iniciei meus estudos de Pós-Graduação em Arquitetura de software, pela Anhanguera - Blumenau
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import TypeIt from 'typeit';
import 'animate.css';
import { ref } from 'vue';

export default {
	data() {
		return {
			display: false,
		};
	},
	setup() {
		const landingIntro = ref('');

		if (landingIntro.value !== '') {
			landingIntro.value === '';
		}
	},
	mounted() {
		new TypeIt('#landing_intro', {
			speed: 50,
			waitUntilVisible: true,
			startDelay: 1500,
			startDelete: true,
			afterComplete: function (instance) {
				instance.destroy();
			},
		})
			.type('Olá, seja bem vindo ao meu perfil!')
			.go();
	},
};
</script>

<style>
.selector {
  background-color: var(--bg-sel);
}

.copyright {
  animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
  animation-delay: 3s;
}

/* @keyframes copyright {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
} */
</style>
