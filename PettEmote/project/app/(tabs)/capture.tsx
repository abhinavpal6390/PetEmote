import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera as CameraIcon, Mic, Image as ImageIcon, RotateCcw, Check } from 'lucide-react-native';
import { CameraView, CameraType } from 'expo-camera';

export default function CaptureScreen() {
  const [mode, setMode] = useState<'photo' | 'video' | 'audio' | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>('back');
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef(null);

  const handleCapture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: true,
      });
      setPhoto(photo.uri);
    } catch (error) {
      console.error('Failed to take photo:', error);
    }
  };

  const handleRetake = () => {
    setPhoto(null);
  };

  const handleConfirm = () => {
    // Here you would typically:
    // 1. Upload the photo for AI analysis
    // 2. Navigate to a results screen
    // For now, we'll just reset
    setPhoto(null);
    setMode(null);
  };

  const renderCaptureModes = () => (
    <View style={styles.captureOptions}>
      <TouchableOpacity
        style={styles.captureOption}
        onPress={() => setMode('photo')}>
        <CameraIcon size={32} color="#FF7043" />
        <Text style={styles.optionText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.captureOption}
        onPress={() => setMode('video')}>
        <ImageIcon size={32} color="#FF7043" />
        <Text style={styles.optionText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.captureOption}
        onPress={() => setMode('audio')}>
        <Mic size={32} color="#FF7043" />
        <Text style={styles.optionText}>Record Audio</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCamera = () => (
    <View style={styles.cameraContainer}>
      {photo ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.preview} />
          <View style={styles.previewControls}>
            <TouchableOpacity
              style={[styles.previewButton, styles.retakeButton]}
              onPress={handleRetake}>
              <RotateCcw size={24} color="#FF7043" />
              <Text style={styles.previewButtonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.previewButton, styles.confirmButton]}
              onPress={handleConfirm}>
              <Check size={24} color="#FFF" />
              <Text style={[styles.previewButtonText, styles.confirmButtonText]}>
                Analyze
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <CameraView 
          ref={cameraRef}
          style={styles.camera} 
          type={cameraType}>
          <View style={styles.cameraControls}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={handleCapture}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analyze Pet Mood</Text>
        <Text style={styles.subtitle}>
          Take a photo, upload an image, or record your pet's sounds
        </Text>
      </View>

      {mode === 'photo' ? renderCamera() : renderCaptureModes()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 20,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 28,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  captureOptions: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  captureOption: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  optionText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    color: '#333',
    marginTop: 12,
  },
  cameraContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  cameraControls: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    padding: 20,
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  captureButtonInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFF',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
  },
  previewControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  previewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  previewButtonText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: '#FF7043',
  },
  retakeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  confirmButton: {
    backgroundColor: '#FF7043',
  },
  confirmButtonText: {
    color: '#FFF',
  },
});