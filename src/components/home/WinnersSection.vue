<template>
  <div>
    <h2 class="section-title">{{$t('Recent Winners')}}</h2>
    <div class="winners-container">
      <div v-for="winner in winners" :key="winner.id" class="winner-card winner-notification">
        <div class="winner-avatar">
          <img :src="winner.avatar" alt="Winner Avatar">
        </div>
        <div class="winner-info">
          <p><strong>{{ winner.name }}</strong></p>
          <p>{{$t('Won')}} {{ winner.prize }}</p>
        </div>
        <span class="winner-time">{{ winner.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinnersSection',
  data() {
    return {
      winners: [
        {
          id: 1,
          name: "Agung Mahmud",
          prize: "TWS JBL Earbuds",
          time: "2m ago",
          avatar: "https://storage.ridlo.eu.org/img/67a31b4c4e746_1738742604.webp"
        },
        {
          id: 2,
          name: "Sarah M.",
          prize: "Voucher Diskon 50%",
          time: "5m ago",
          avatar: "https://storage.ridlo.eu.org/img/67a31b4c4e746_1738742604.webp"
        }
      ]
    }
  },
  methods: {
    simulateNewWinner() {
      const newWinners = [
        { name: "Dani Sukardan", prize: "Voucher Diskon 80%", time: "Just now" },
        { name: "Maria Sulasti", prize: "Ebook Digital PLR 2000+", time: "Just now" },
        { name: "Leni Marsin", prize: "Video Course Cuan Produk Digital", time: "1m ago" },
        { name: "Wanda", prize: "Wireless Earbuds", time: "6m ago" },
        { name: "Naila Wati", prize: "Movie Tickets", time: "4m ago" },
        { name: "Linda R.", prize: "$50 Food Voucher", time: "8m ago" },
        { name: "Tom H.", prize: "Gaming Keyboard", time: "7m ago" },
        { name: "Sophie B.", prize: "Bluetooth Speaker", time: "2m ago" },
        { name: "Jack M.", prize: "Smartphone", time: "3m ago" },
        { name: "Eva S.", prize: "Wireless Mouse", time: "2m ago" },
        { name: "Oliver L.", prize: "Movie Tickets", time: "3m ago" }
        // ... more winners
      ]
      const randomWinner = newWinners[Math.floor(Math.random() * newWinners.length)]
      
      this.winners.unshift({
        id: Date.now(),
        name: randomWinner.name,
        prize: randomWinner.prize,
        time: randomWinner.time,
        avatar: `https://storage.ridlo.eu.org/img/67a31b4c4e746_1738742604.webp`
      })

      if (this.winners.length > 5) {
        this.winners.pop()
      }
    }
  },
  mounted() {
    setInterval(this.simulateNewWinner, 5000)
  }
}
</script>