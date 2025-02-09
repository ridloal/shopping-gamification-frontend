<template>
  <div>
    <h2 class="section-title">{{$t('Recent Winners')}}</h2>
    <div class="winners-container">
      <div v-for="winner in winners" :key="winner.id" class="winner-card winner-notification">
        <div class="winner-avatar">
          <img :src="winner.avatar" alt="Winner Avatar">
        </div>
        <div class="winner-info">
          <!-- adjust text size -->
          <p style="font-size: medium;">{{ winner.name }}</p>
          <p style="margin-bottom: 10px;"><strong>@{{ winner.username }}</strong></p>
          <!-- higlighted effect with font color green -->
          <span class="prize-badge">{{$t('Won')}} {{ winner.prize }}</span>
        </div>
        <span class="winner-time">{{ winner.time }}</span>
        <div class="winner-platform">
          <span v-if="winner.platform === 'Tiktok'" class="fab fa-tiktok"></span>
          <span v-if="winner.platform === 'Instagram'" class="fab fa-instagram"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const prize = [
  'Voucher Diskon 50%',
  'TWS JBL Earbuds',
  'Ebook Digital PLR 2000+',
  'Video Course Cuan Produk Digital',
  'Smartwatch Huawei',
  'Voucher Diskon 80%',
  'Voucher Diskon 70%',
  'Voucher 100rb Tokopedia',
  'Voucher 50rb Gojek',
  'Voucher 50rb Grab',
  'Powerbank Xiaomi 10000mAh',
  'Powerbank Anker 20000mAh',
  'Kabel Data All In One Fast Charging',
]

const platform = [
  'Instagram',
  'Tiktok'
]

export default {
  name: 'WinnersSection',
  data() {
    return {
      winners: [
        {
          id: 1,
          platform: this.randomPlatform(),
          name: "Rian wiguna",
          username: 'wrian478',
          prize: this.randomPrize(),  
          time: this.randomTime(),
          avatar: "https://storage.ridlo.eu.org/img/67a8655ea2782_1739089246.webp"
        },
        {
          id: 2,
          platform: this.randomPlatform(),
          name: "alihafidz",
          username: 'alihafidz_2706',
          prize: this.randomPrize(),
          time: this.randomTime(),
          avatar: "https://storage.ridlo.eu.org/img/67a8655df0f28_1739089245.webp"
        }
      ]
    }
  },
  methods: {
    simulateNewWinner() {
      const newWinners = [
        { platform: this.randomPlatform(), username: "ahmed_adiyansyah", name: "trifin indrawati", avatar: "https://storage.ridlo.eu.org/img/67a8661ca6838_1739089436.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "arman_kander_", name: "Wahyu Aditya Pratama", avatar: "https://storage.ridlo.eu.org/img/67a8661dd1119_1739089437.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "lalanp._", name: "edo edo", avatar: "https://storage.ridlo.eu.org/img/67a8661e8dea5_1739089438.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "lydh.yaaa", name: "KATALOG BHIRU APPAREL", avatar: "https://storage.ridlo.eu.org/img/67a8661f41169_1739089439.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "maryantocintasehidup", name: "chénxiǎomì", avatar: "https://storage.ridlo.eu.org/img/67a8662078e6e_1739089440.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "masnimun69", name: "Aggnar", avatar: "https://storage.ridlo.eu.org/img/67a8662132a65_1739089441.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "ryaa5282", name: "shyfa maysi", avatar: "https://storage.ridlo.eu.org/img/67a8662192b61_1739089441.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "trifin_indra98", name: "shaike arif", avatar: "https://storage.ridlo.eu.org/img/67a866230e8a7_1739089443.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "viaelsaavionita", name: "untung", avatar: "https://storage.ridlo.eu.org/img/67a8662400c73_1739089444.webp" ,prize: this.randomPrize(), time: this.randomTime() },
        { platform: this.randomPlatform(), username: "weduar063", name: "melati Safitri afrilia", avatar: "https://storage.ridlo.eu.org/img/67a8662485451_1739089444.webp" ,prize: this.randomPrize(), time: this.randomTime() },

      ]
      const randomWinner = newWinners[Math.floor(Math.random() * newWinners.length)]
      
      this.winners.unshift({
        id: Date.now(),
        platform: this.randomPlatform(),
        username: randomWinner.username,
        name: randomWinner.name,
        prize: randomWinner.prize,
        time: randomWinner.time,
        avatar: randomWinner.avatar ? randomWinner.avatar : "https://storage.ridlo.eu.org/img/67a8651ef0cb3_1739089182.webp"
      })

      if (this.winners.length > 5) {
        this.winners.pop()
      }
    },
    randomPrize() {
      return prize[Math.floor(Math.random() * prize.length)]
    },
    randomTime() {
      const minutes = Math.floor(Math.random() * 60)
      return `${minutes}m ago`
    },
    randomPlatform() {
      return platform[Math.floor(Math.random() * platform.length)]
    }
  },
  mounted() {
    setInterval(this.simulateNewWinner, 5000)
  }
}
</script>

<style scoped>

.prize-badge {
  display: inline-block;
  padding: 6px 12px;
  background-color: #e3f2fd;
  color: #1976d2;
  border-radius: 20px;
  font-size: 14px;
}

.winner-platform {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}

</style>