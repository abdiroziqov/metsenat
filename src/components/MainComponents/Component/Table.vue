<template>
  <div class="overflow-x-auto relative mt-10">
    <table class="w-full text-sm text-left mb-7">
      <thead class="text-xs uppercase font-medium text-[#B1B1B8]">
        <tr>
          <th scope="col" class="py-3 pl-6">
            #
          </th>
          <th scope="col" class="py-3 pr-6">
            fish
          </th>
          <th scope="col" class="py-3 px-6">
            Tel.Raqami
          </th>
          <th scope="col" class="py-3 px-6">
            Homiylik summasi
          </th>
          <th scope="col" class="py-3 px-6">
            Sarflangan summa
          </th>
          <th scope="col" class="py-3 px-6 text-center">
            Sana
          </th>
          <th scope="col" class="py-3 px-6">
            Holati
          </th>
          <th scope="col" class="py-3 px-6 text-center">
            Amallar
          </th>
        </tr>
      </thead>
      <tbody class="rounded-lg mb-20">
        <tr
          v-for="item in items"
          :key="item"
          class="font-normal text-[#1D1D1F] bg-white border border-[rgba(46,91,255,0.08)] rounded-lg"
        >
          <th scope="row" class="py-4 px-6 font-medium">
            {{ item.number }}
          </th>
          <td class="py-4 pr-6">
            {{ item.name }}
          </td>
          <td class="py-4 px-6">
            {{ item.phone }}
          </td>
          <td class="py-4 px-6">{{ item.cash }} UZS</td>
          <td class="py-4 px-6 text-center">{{ item.money }} UZS</td>
          <td class="py-4 px-6">
            {{ item.date }}
          </td>
          <td class="py-4 px-6 text-center">
            {{ item.status }}
          </td>
          <td class="py-4 px-6 flex justify-center">
            <img src="@/assets/icon/eye.png" alt="eye" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = [
  {
    number: "1",
    name: " Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    money: "30 000 000",
    cash: "0",
    date: " 15.01.2021",
    status: "yangi",
  },
  {
    number: "2",
    name: "Saimov Rustam Saimjonovich",
    phone: "+99899 973-72-60",
    money: "1 000 000",
    cash: "0",
    date: "02.02.2021",
    status: "Moderatsiyada",
  },
  {
    number: "3",
    name: "Sanginov Otabek Muratovich",
    phone: "+99899 973-72-60",
    money: "5 000 000",
    cash: "5 000 000",
    date: "20.04.2021",
    status: "Tasdiqlangan",
  },
  {
    number: "4",
    name: "Nazarov Sanjar Olimovich",
    phone: "+99899 973-72-60",
    money: "7 000 000",
    cash: "7 000 000",
    date: "03.05.2021",
    status: "Bekor qilingan",
  },
  {
    number: "5",
    name: "Ibragimov Sohib Mirfayozovich",
    phone: "+99899 973-72-60",
    money: "10 000 000",
    cash: "0",
    date: "10.05.2021",
    status: "Moderatsiyada",
  },
  {
    number: "6",
    name: "Ishmuhammedov Aziz Ishqobilovich",
    phone: "+99899 973-72-60",
    money: "30 000 000",
    cash: "1 000 000",
    date: "17.06.2021",
    status: "Bekor qilingan",
  },
  {
    number: "7",
    name: "Qosimov Furqat Xabibullayevich",
    phone: "+99899 973-72-60",
    money: "50 000 000",
    cash: "0",
    date: "21.06.2021",
    status: "Yangi",
  },
  {
    number: "8",
    name: "Qosimov Furqat Xabibullayevich",
    phone: "+99899 973-72-60",
    money: "50 000 000",
    cash: "0",
    date: "21.06.2021",
    status: "Yangi",
  },
  {
    number: "9",
    name: "Qosimov Furqat Xabibullayevich",
    phone: "+99899 973-72-60",
    money: "50 000 000",
    cash: "0",
    date: "21.06.2021",
    status: "Yangi",
  },
  {
    number: "10",
    name: "Qosimov Furqat Xabibullayevich",
    phone: "+99899 973-72-60",
    money: "50 000 000",
    cash: "0",
    date: "21.06.2021",
    status: "Yangi",
  },
];
</script>
