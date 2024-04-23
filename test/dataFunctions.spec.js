/*import { fakeData } from '../test/fakeDataset.js';
import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';

describe('testes filterData', () => {
  it('deve exibir todos os dados do dataset que combinarem com a formação, quando o usuário escolher a opção "formacao"', () => {
    const filteredData = filterData(fakeData, 'formacao', 'Sistemas de Informação');
    expect(filteredData.length).toEqual(2);
  })
});

describe('testes sortData', () => {
  it('deve exibir os cards ordenando os valores "salario" de maior para o menor`', () => {
    const sortedData = sortData(fakeData, 'salario', 'desc');

    expect(sortedData.length).toEqual(5);
    expect(sortedData[0].id).toBe('analista-seguranca-info');
    expect(sortedData[1].id).toBe('admin-banco-dados');
    expect(sortedData[2].id).toBe('analista-bi');
    expect(sortedData[3].id).toBe('analista-infra-ti');
    expect(sortedData[4].id).toBe('analista-qualidade');
  });
});

describe('testes computeStats', () => {
  it('deve exibir a quantidade de cards renderizados, quando o usuário escolher a opção de filtrar por "formacao"', () => {
    const computedStats = computeStats(fakeData, 'formacao', 'Sistemas de Informação');
    expect(computedStats).toEqual(2);
  })
});
*/

import { fakeData } from '../test/fakeDataset.js';
import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';

describe('testes filterData', () => {
  it('deve retornar um array vazio se nenhum dado combinar com a formação', () => {
    const filteredData = filterData(fakeData, 'formacao', 'Engenharia Elétrica');
    expect(filteredData.length).toEqual(0);
  });

  describe('testes sortData', () => {
    it('deve exibir os cards ordenando os valores "salario" de maior para o menor', () => {
      const sortedData = sortData(fakeData, 'salario', 'desc');

      expect(sortedData.length).toEqual(5);
      expect(sortedData[0].id).toBe('analista-seguranca-info');
      expect(sortedData[1].id).toBe('admin-banco-dados');
      expect(sortedData[2].id).toBe('analista-bi');
      expect(sortedData[3].id).toBe('analista-infra-ti');
      expect(sortedData[4].id).toBe('analista-qualidade');
    });

    it('deve exibir os cards ordenando os valores "salario" de menor para o maior', () => {
      const sortedData = sortData(fakeData, 'salario', 'asc');

      expect(sortedData.length).toEqual(5);
      expect(sortedData[0].id).toBe('analista-qualidade');
      expect(sortedData[1].id).toBe('analista-infra-ti');
      expect(sortedData[2].id).toBe('analista-bi');
      expect(sortedData[3].id).toBe('admin-banco-dados');
      expect(sortedData[4].id).toBe('analista-seguranca-info');
    });

    it('deve manter a ordem dos dados original se sortOrder não for "asc" ou "desc"', () => {
      const sortedData = sortData(fakeData, 'salario', 'invalidSortOrder');

      expect(sortedData.length).toEqual(fakeData.length);
      for (let i = 0; i < fakeData.length; i++) {
        expect(sortedData[i].id).toBe(fakeData[i].id);
      }
    });

    it('deve tratar adequadamente o caso em que o sortBy não existe nos dados', () => {
      const sortedData = sortData(fakeData, 'salarioInexistente', 'asc');

      expect(sortedData.length).toEqual(fakeData.length);
      for (let i = 0; i < fakeData.length; i++) {
        expect(sortedData[i].id).toBe(fakeData[i].id);
      }
    });
  });

  describe('testes computeStats', () => {
    it('deve exibir a quantidade de cards renderizados, quando o usuário escolher a opção de filtrar por "formacao"', () => {
      const computedStats = computeStats(fakeData, 'formacao', 'Sistemas de Informação');
      expect(computedStats).toEqual(2);
    });

    it('deve retornar 0 se nenhum dado combinar com a formação', () => {
      const computedStats = computeStats(fakeData, 'formacao', 'Engenharia Elétrica');
      expect(computedStats).toEqual(0);
    });


  });
});