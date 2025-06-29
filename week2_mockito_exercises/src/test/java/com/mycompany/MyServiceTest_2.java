package com.mycompany;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest_2 {
   
    interface ExternalApi {
        String getData();
    }


    class MyService {
        private ExternalApi api;

        public MyService(ExternalApi api) {
            this.api = api;
        }

        public void fetchData() {
            api.getData(); 
        }
    }

    @Test
    public void testVerifyInteraction() {
        
        ExternalApi mockApi = mock(ExternalApi.class);

        
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData(); 
    }
}
