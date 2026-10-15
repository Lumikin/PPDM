/*usaremos os métodos [describe, test, render e expect] p/ testar
os componentes*/
import { render, screen } from '@testing-library/react-native';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

import HomeScreen from '@/app/index';

// Mock do ícone animado (usa Reanimated, que não precisamos testar aqui)
jest.mock('@/components/animated-icon', () => ({
  AnimatedIcon: () => null,
}));

describe('HomeScreen', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // desfaz os replaceProperty de cada teste
  });

  test('mostra o título de boas-vindas', async () => {
    await render(<HomeScreen />); //Arrange (monta a tela)
    expect(screen.getByText(/Welcome to/)).toBeOnTheScreen(); //Assert (confere o resultado)
    // se tivesse algum clique/ ação do usuário seria Act
  });

  test('mostra "get started" e os três passos', async () => {
    await render(<HomeScreen />); //Arrange
    expect(screen.getByText('get started')).toBeOnTheScreen(); //Assert
    expect(screen.getByText('Try editing')).toBeOnTheScreen();
    expect(screen.getByText('Dev tools')).toBeOnTheScreen();
    expect(screen.getByText('Fresh start')).toBeOnTheScreen();
  });

  test('no iOS (simulador) mostra o atalho cmd+d', async () => {
    jest.replaceProperty(Platform, 'OS', 'ios');
    jest.replaceProperty(Device, 'isDevice', false);
    await render(<HomeScreen />);
    expect(screen.getByText('cmd+d')).toBeOnTheScreen();
  });

  test('no Android (emulador) mostra o atalho cmd+m', async () => {
    jest.replaceProperty(Platform, 'OS', 'android');
    jest.replaceProperty(Device, 'isDevice', false);
    await render(<HomeScreen />);
    expect(screen.getByText('cmd+m (or ctrl+m)')).toBeOnTheScreen();
  });

  test('em aparelho físico mostra "shake device"', async () => {
    jest.replaceProperty(Device, 'isDevice', true);
    await render(<HomeScreen />);
    expect(screen.getByText(/shake device/)).toBeOnTheScreen();
  });

  test('na web mostra "use browser devtools"', async () => {
    jest.replaceProperty(Platform, 'OS', 'web');
    await render(<HomeScreen />);
    expect(screen.getByText('use browser devtools')).toBeOnTheScreen();
  });
});


//rodar npx jest ou npm test
