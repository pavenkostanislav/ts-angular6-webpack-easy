export interface IConfig {	
	log: {
		level: 'debug' | 'info' | 'warn' | 'error';
        hideFields: string;
    };
    environment : {
        url: string;
        time: {
            wait: number;
        }
    }
}


