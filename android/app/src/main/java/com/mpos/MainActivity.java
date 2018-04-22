package com.mpos;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.UUID;

import com.facebook.react.ReactActivity;
import android.widget.Toast;
import android.content.Intent;


import android.os.Bundle;
import android.view.KeyEvent;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.DialogInterface.OnKeyListener;

public class MainActivity extends ReactActivity {
    private static final int REQUEST_ENABLE_BT = 1;
    private static final int REQUEST_DEVICE = 2;

    private static final UUID SPP_UUID = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
    
    
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "mpos";
    }

    @Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
		switch (requestCode) {
			case REQUEST_DEVICE: {
			}
		}
    }
    
    private void postToast(final String text) {
        runOnUiThread(new Runnable() {			
			@Override
			public void run() {
				Toast.makeText(getApplicationContext(), text, Toast.LENGTH_SHORT).show();
			}
		});
    }


}
