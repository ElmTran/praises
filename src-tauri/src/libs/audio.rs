use soloud::{ audio, AudioExt, LoadExt, Soloud };
use std::thread;
use std::time::Duration;

pub async fn play_async(audio: &[u8]) -> Result<(), Box<dyn std::error::Error>> {
    let sl = Soloud::default()?;
    let mut wav = audio::Wav::default();
    wav.load_mem(audio)?;
    sl.play(&wav);
    while sl.voice_count() > 0 {
        thread::sleep(Duration::from_millis(100));
    }
    Ok(())
}
