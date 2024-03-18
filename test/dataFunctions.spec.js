import { data } from '../src/data/dataset.js';
import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';


describe('testes filterData', () => {
  it('deve exibir todos os dados do dataset que combinarem com a formação sugerida, quando o usuário escolher a opção "formacaoSugerida"', () => {
    const filteredData = filterData(fakeData, 'formacaoSugerida', 'Ciência da Computação');
    // console.log(filterData);
    expect(filteredData.length).toEqual(3);
  })
});


describe('testes sortData', () => {
  it('deve exibir os cards ordenando os valores "mediaSalarial" de maior para o menor`', () => {
    const sortedData = sortData(fakeData, 'mediaSalarialJr', 'desc');

    expect(sortedData.length).toEqual(5);
    console.log(sortedData);
    expect(sortedData[0].id).toBe('analista-seguranca-info');
    expect(sortedData[1].id).toBe('admin-banco-dados');
    expect(sortedData[2].id).toBe('analista-bi');
    expect(sortedData[3].id).toBe('analista-infra-ti');
    expect(sortedData[4].id).toBe('analista-qualidade');
  });
});


describe('testes computeStats', () => {
  it('deve exibir a quantidade de cards renderizados, quando o usuário escolher a opção de filtrar por "formacaoSugerida"', () => {
    const computedStats = computeStats(fakeData, 'formacaoSugerida', 'Ciência da Computação');
    // console.log(filterData);
    expect(computedStats).toEqual(3);
  })
});