'use client'

import { useState } from 'react';
import Navbar from "../components/navbar"

export default function Appointment(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    return(
        <><Navbar></Navbar>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Agendamento</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite seu CPF"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite seu telefone"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="aniversario" className="block text-sm font-medium text-gray-700">
              Aniversário
            </label>
            <input
              type="date"
              id="aniversario"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <fieldset className="space-y-4">
              <legend className="block text-sm font-medium text-gray-700">Tipo Sanguíneo</legend>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="A+" className="mr-2" />
                  A+
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="A-" className="mr-2" />
                  A-
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="B+" className="mr-2" />
                  B+
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="B-" className="mr-2" />
                  B-
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="AB+" className="mr-2" />
                  AB+
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="AB-" className="mr-2" />
                  AB-
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="O+" className="mr-2" />
                  O+
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="O-" className="mr-2" />
                  O-
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tipoSanguineo" value="na" className="mr-2" />
                  Não conheço
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mb-4">
            <button
              type="button"
              onClick={toggleModal}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Horário da Doação
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h3 className="text-lg font-bold mb-4">Escolha um horário</h3>
                <div className="space-y-2">
                  <button className="block w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                    Segunda 08:00
                  </button>
                  <button className="block w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                    Segunda 08:15
                  </button>
                  <button className="block w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                    Segunda 08:30
                  </button>
                  <button className="block w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                    Segunda 08:45
                  </button>
                  <button className="block w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                    Segunda 09:00
                  </button>
                </div>
                <button
                  onClick={toggleModal}
                  className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
        </>
    )
}