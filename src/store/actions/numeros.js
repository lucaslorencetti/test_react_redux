import * as AcTypes from './actionTypes';

export const alterarNumeroMinimo = (novoNumero) => {
    return { type: AcTypes.NUM_MIN_ALTERADO, payload: novoNumero }
};
export const alterarNumeroMaximo = (novoNumero) => {
    return { type: AcTypes.NUM_MAX_ALTERADO, payload: novoNumero }
};