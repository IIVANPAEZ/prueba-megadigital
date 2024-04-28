"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

const calcularCantidadPostsPorUsuario = (posts) => {
  const cantidadPostsPorUsuario = {};
  posts.forEach((post) => {
    const userId = post.userId;
    cantidadPostsPorUsuario[userId] =
      (cantidadPostsPorUsuario[userId] || 0) + 1;
  });

  const resultado = Object.keys(cantidadPostsPorUsuario).map((userId) => ({
    userId: parseInt(userId),
    cantidadPosts: cantidadPostsPorUsuario[userId],
  }));

  return resultado;
};

async function PosteosChart({ users }) {
  const posts = await fetchPosts();
  const postsData = calcularCantidadPostsPorUsuario(posts);

  console.log(postsData, users);

  const labels = users.map((user) => user.name);
  const postCounts = postsData.map((data) => data.cantidadPosts);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cantidad de Posteos por Usuario",
        data: postCounts,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Cantidad de Posteos",
        },
      },
      x: {
        title: {
          display: true,
          text: "Usuarios",
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

export default PosteosChart;
