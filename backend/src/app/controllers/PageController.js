class PageController {
  async index(req, res) {
    const defaultValue = [
      {
        title: 'Home',
        icon: 'home',
        url: 'page://home',
        component: 'HomeScreen',
        content: [],
      },
      {
        title: 'Camara',
        icon: 'office-building',
        url: 'page://camera',
        component: 'ChamberScreen',
        content: [
          {
            type: 'post',
            title: 'Mensagens do Presidente',
            properties: {
              categories: ['messages']
            }
          },
          {
            type: 'post',
            title: 'Notícias',
            properties: {
              categories: ['news']
            }
          },
          {
            type: 'post',
            title: 'Horas e serviços',
            properties: {
              categories: ['schedules', 'services']
            }
          },
          {
            type: 'post',
            title: 'Taxas e Tarifários',
            properties: { categories: ['taxes'] }
          }
        ]
      },
      {
        title: 'Comunicar',
        icon: 'wechat',
        url: 'page://comunicar',
        component: 'InformingScreen',
        content: []
      },
      {
        title: 'Proteção civil',
        icon: 'alert',
        url: 'page://protecao-civil',
        component: 'CivilProtectionScreen',
        content: []
      },
      {
        title: 'Covid',
        icon: 'bandage',
        url: 'page://covid',
        component: 'CovidScreen',
        content: []
      },
      {
        title: 'Agenda',
        icon: 'calendar-multiselect',
        url: 'page://agenda',
        component: 'ScheduleScreen',
        content: []
      }
    ];

    return res.json(defaultValue);
  }
}

export default new PageController();
