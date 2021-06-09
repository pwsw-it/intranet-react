/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosPromise, AxiosInstance } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

const baseUrl='http://127.0.0.1:81/ab';

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
function axios(configs: IRequestConfig): AxiosPromise {
  return serviceOptions.axios ? 
    serviceOptions.axios.request(configs) : 
    axiosStatic(configs);
}

export class BranchesService {
  /**
   *
   */
  static getBranches(options: IRequestOptions = {}): Promise<ApiBranches> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = baseUrl+'/branches';

      configs.url = url;

/*      let data = null;

      configs.data = data;
      */
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class ContactsService {
  /**
   *
   */
  static getContacts(
    params: {
      /** identyfikator grupy / wydziału */
      bcode?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ApiContacts> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, 
          method: 'get' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = baseUrl+'/contacts';
      configs.url = url;
      configs.params = params;

      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class ApiBranch {
  /** identyfikator */
  id: string;

  /** nazwa grupy / wydziału */
  branch: string;

  /** kod grupy (skrót) */
  bcode: string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['branch'] = data['branch'];
    this['bcode'] = data['bcode'];
  }
}

export class ApiBranches {
  /**  */
  branches: ApiBranch[];

  constructor(data: undefined | any = {}) {
    this['branches'] = data['branches'];
  }
}

export class ApiContact {
  /** nazwisko */
  bcode: string;

  /** nazwisko */
  name: string;

  /** email */
  email: string;

  /** telefon */
  phone: string;

  /** stanowisko */
  function: string;

  /** uwagi */
  notes: string;

  constructor(data: undefined | any = {}) {
    this['bcode'] = data['bcode'];
    this['name'] = data['name'];
    this['email'] = data['email'];
    this['phone'] = data['phone'];
    this['function'] = data['function'];
    this['notes'] = data['notes'];
  }
}

export class ApiContacts {
  /**  */
  contacts: ApiContact[];

  constructor(data: undefined | any = {}) {
    this['contacts'] = data['contacts'];
  }
}

export class Error {
  /** ret. message */
  message: string;

  /** ret. code */
  retcode: number;

  constructor(data: undefined | any = {}) {
    this['message'] = data['message'];
    this['retcode'] = data['retcode'];
  }
}
