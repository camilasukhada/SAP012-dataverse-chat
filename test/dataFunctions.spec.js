import { fakeData } from '../test/fakeDataset.js';
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